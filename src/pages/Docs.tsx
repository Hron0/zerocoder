import MainLayout from '@/Components/Layouts/MainLayout'
import { ScrollArea, ScrollBar } from '@/Components/UI/scroll-area'
import check from '@/assets/check.svg'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/UI/table'
import { CopyBlock, a11yDark } from 'react-code-blocks'
import { codeExamples } from './../lib/codeBlocks';

interface ProvidersRows {
  provider?: string
  model?: string,
  modelT?: string,
  modelTT?: string,
  img?: string,
  dev?: boolean
}

interface MethodsRow {
  provider?: string,
  method: string
  img?: string,
}

const Docs = () => {

  const providers: ProvidersRows[] = [
    { provider: 'OpenAI', model: 'GPT-4-Turbo(128K context)', modelT: 'с поддержкой vision', modelTT: 'Для вызова надо пользоваться полными именами модели: gpt-4-1106-preview или gpt-4-vision-preview.', img: check },
    { model: 'GPT-4(8K context)', img: check },
    { model: 'GPT-3.5-Turbo(16K context)', img: check },
    { model: 'Whisper', modelT: 'преобразование аудио в текст', modelTT: 'В соответствии с Условиями использования необходимо предупреждать конечных пользователей о том, что для генерации голосаиспользовалась технология искусственного интеллекта.', img: check },
    { provider: 'Anthropic', dev: true },
    { provider: 'Midjourney', dev: true },
  ]

  const methods: MethodsRow[] = [
    { provider: 'OpenAI', method: '/v1/models', img: check },
    { method: '/v1/chat/completions', img: check },
    { method: '/v1/embeddings', img: check },
    { method: '/v1/images/edit', img: check },
    { method: '/v1/audio/transcription', img: check },
  ]

  return (
    <>
      <MainLayout>
        <h2 className='text-xl lg:text-5xl font-medium'>Документация</h2>
        <h3 className='text-lg lg:text-3xl font-medium'>Что такое ProxyAPI</h3>
        <h4 className='text-md md:text-lg'>ProxyAPI предоставляет доступ к API иностранных сервисов. В случаях, когда это возможно мы сохраняем оригинальные методы и параметры. Это
          делает возможным пользоваться официальной документацией и библиотеками.</h4>
        <h3 className='text-lg lg:text-3xl font-medium mt-3'>Доступные провайдеры и модели</h3>

        <ScrollArea className='w-full'>
          <div>
            <Table className='w-full'>
              <TableHeader>
                <TableRow>
                  <TableHead className='font-bold text-black text-xl'>Провайдер</TableHead>
                  <TableHead className='font-bold text-black text-xl w-[80%] pr-[8rem] sm:pr-[auto]'>Модель</TableHead>
                  <TableHead className='font-bold text-black text-xl w-[10%]'>Поддержка</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {providers.map((data) =>
                  <TableRow className='border-none'>
                    <TableCell className='text-xl align-top font-bold'>{data.provider}</TableCell>

                    {data.dev ?
                      <TableCell>
                        <p className='text-gray-400 italic'>В разработке</p>
                      </TableCell>
                      : null}

                    {data.modelT ?
                      <TableCell>
                        <div className='flex flex-col items-start gap-2'>
                          <p className='text-lg'>{data.model}</p>
                          <span className='text-gray-400'>{data.modelT}</span>
                          {data.modelTT ?
                            <span className='text-gray-400'>{data.modelTT}</span>
                            : null}
                        </div>
                      </TableCell>
                      :
                      <TableCell className='text-lg'>{data.model}</TableCell>}

                    <TableCell className='flex justify-center'>
                      <img src={data.img} alt="" className='pr-3 md:pr-10' />
                    </TableCell>

                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h3 className='text-lg lg:text-3xl font-medium mt-3'>Доступные провайдеры и модели</h3>

        <ScrollArea className='w-full'>
          <div>
            <Table className='w-full'>
              <TableHeader>
                <TableRow>
                  <TableHead className='font-bold text-black text-xl w-[20%]'>Провайдер</TableHead>
                  <TableHead className='font-bold text-black text-xl w-[70%] pr-[8rem] sm:pr-[auto]'>Метод</TableHead>
                  <TableHead className='font-bold text-black text-xl w-[10%]'>Поддержка</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {methods.map((data) =>
                  <TableRow>
                    <TableCell className='text-xl align-top font-bold'>{data.provider}</TableCell>
                    <TableCell className='text-md'>{data.method}</TableCell>
                    <TableCell className='flex justify-center'>
                      <img src={data.img} alt="" className='pr-3 md:pr-10' />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <h3 className='text-lg lg:text-3xl font-medium mt-3'>Ключ API</h3>
        <h4 className='text-md md:text-lg'>Для использования ProxyAPI необходимо получить ключ API. Для этого необходимо <a href='' className='underline underline-offset-2'>зарегистрироваться</a> на сайте и перейти в раздел "Ключи API".
          Обратите внимание, что увидеть ключ целиком можно только один раз, сразу после создания.</h4>

        <h3 className='text-lg lg:text-3xl font-medium mt-3'>Работа с запросами</h3>
        <h4 className='text-md md:text-lg'>При отправке запроса к ProxyAPI используйте наш адрес вместо адреса оригинального API, добавляя в конце индентификатор провадера в нашей
          системе:</h4>
        <div className='w-full'>
          <CopyBlock
            text={codeExamples.first}
            showLineNumbers={false}
            language='python'
            theme={a11yDark}
          />
        </div>

        <h4 className='text-md md:text-lg'>В заголовке запроса укажите ключ API:</h4>
        <div className='w-full'>
          <CopyBlock
            text={codeExamples.second}
            showLineNumbers={false}
            language='python'
            theme={a11yDark}
          />
        </div>

        <h4 className='text-md md:text-lg'>Кроме случаев, о которых мы будем предупреждать дополнительно в этой документации, все методы и параметры запроса остаются такими же, как
          и в оригинальном API. Например:</h4>
        <div className='w-full'>
          <CopyBlock
            text={codeExamples.third}
            showLineNumbers={false}
            language='python'
            theme={a11yDark}
            wrapLongLines={true}
            codeBlock
          />
        </div>

        <h4 className='text-md md:text-lg'>Таким же образом можно пользоваться официальными библиотеками. Например OpenAI для Python (пример для версии 1.3.5, последней на момент
          написания):</h4>
        <div className='w-full'>
          <CopyBlock
            text={codeExamples.fourth}
            showLineNumbers={false}
            language='python'
            theme={a11yDark}
            wrapLongLines={true}
            codeBlock
          />
        </div>

        <h4 className='text-md md:text-lg'>А вот пример генерации изображений с помощью DALL-E 3:</h4>
        <div className='w-full'>
          <CopyBlock
            text={codeExamples.fifth}
            showLineNumbers={false}
            language='python'
            theme={a11yDark}
            wrapLongLines={true}
            codeBlock
          />
        </div>
        <h4 className='text-md md:text-lg italic mb-5'>Замените {'{'}PROXY_API_KEY{'}'} на ваш ключ API.</h4>
      </MainLayout>
    </>
  )
}

export default Docs