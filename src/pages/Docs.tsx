import MainLayout from '@/Components/Layouts/MainLayout'
import { ScrollArea, ScrollBar } from '@/Components/UI/scroll-area'
import check from '@/assets/check.svg'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/UI/table'

interface rows {
  provider?: string
  model?: string,
  modelT?: string,
  modelTT?: string,
  img?: string,
  dev?: boolean
}

const Docs = () => {

  const providers: rows[] = [
    { provider: 'OpenAI', model: 'GPT-4-Turbo(128K context)', modelT: 'с поддержкой vision', modelTT: 'Для вызова надо пользоваться полными именами модели: gpt-4-1106-preview или gpt-4-vision-preview.', img: check },
    { model: 'GPT-4(8K context)', img: check },
    { model: 'GPT-3.5-Turbo(16K context)', img: check },
    { model: 'Whisper', modelT: 'преобразование аудио в текст', modelTT: 'В соответствии с Условиями использования необходимо предупреждать конечных пользователей о том, что для генерации голосаиспользовалась технология искусственного интеллекта.', img: check },
    { provider: 'Anthropic', dev: true },
    { provider: 'Midjourney', dev: true },
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
                        <p  className='text-lg'>{data.model}</p>
                        <span className='text-gray-400'>{data.modelT}</span>
                        {data.modelTT ?
                          <span className='text-gray-400'>{data.modelTT}</span>
                        : null}
                      </div>
                    </TableCell>
                  :
                  <TableCell className='text-lg'>{data.model}</TableCell>}

                  <TableCell className='flex justify-center'>
                    <img src={data.img} alt="" className='pr-3 md:pr-10'/>
                  </TableCell>

                </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </MainLayout>
    </>
  )
}

export default Docs