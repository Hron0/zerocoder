import MainLayout from '@/Components/Layouts/MainLayout'
import { ScrollArea, ScrollBar } from '@/Components/UI/scroll-area'
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
  inc?: string,
  incT?: string,
  out?: string,
  outT?: string,
  tollTip?: string,
}

const Rates = () => {
  const tableRows: rows[] = [
    { provider: 'OpenAI', model: 'GPT-4-Turbo (128K context)', inc: '2,88 Р', incT: ' за 1К токенов', out: '8,64 Р', outT: ' за 1К токенов' },
    {
      tollTip: 'Модель поддерживает запросы с помощью изображений, в этом случае тарификация зависит от размера изображения и его качества.Чем больше изображение и чем выше его качество, тем больше токенов будет потрачено.Подробности на сайте OpenAI, в разделе Pricing - GPT - 4 Turbo - Vision pricing calculator.'
    },
    { model: 'GPT-3.5 Turbo (16K context)', modelT: 'модели gpt-3.5-turbo-1106 и новее, заменяют старые модели с 4К и 16К context', inc: '8,64 Р', incT: ' за 1К токенов', out: '17,28 Р', outT: ' за 1К токенов' },
    { model: 'Whisper', inc: '1,73 Р', incT: ' за 1 минуту (округление до секунды)' }
  ]

  const otherRows = [
    {
      model: 'DALL-E 2', res: ['256x256', '512x512', '1024x1024'], resT: 'пикселей',
      price: ['4,60 Р', '5,19 Р', '5,76'], priceT: 'за 1 изображение'
    },
    {
      model: 'DALL-E 3', res: ['256x256', '512x512', '1024x1024'], resT: 'пикселей',
      price: ['4,60 Р', '5,19 Р', '5,76'], priceT: 'за 1 изображение'
    },
    {
      model: 'DALL-3 HD', res: ['256x256', '512x512', '1024x1024'], resT: 'пикселей',
      price: ['4,60 Р', '5,19 Р', '5,76'], priceT: 'за 1 изображение'
    },
  ]

  return (
    <>
      <MainLayout>
        <h2 className='text-h1 font-medium'>Тарифы</h2>
        <h3 className='text-h2'>Простые и понятные цены: платите только за то, что использовали.
          Без подписок и скрытых платежей.</h3>
        <h4 className='text-h4'>Цены указаны за 1 000 "токенов" (для языковых моделей). Токен - это часть слова или знак препинания, которые генерирует или распознает
          языковая модель. Когда модель работает с текстом на кириллице, то каждый токен состоит из 1-2 букв, на латиннице расход токенов несколько
          меньше - один токен это примерно 2-3 буквы. Цены на "входящие" (то, что вы отправляете в модель) и "исходящие" (то, что модель возвращает)
          токены отличаются.</h4>

        <ScrollArea className='w-full'>
          <div>
            <Table className='w-full'>
              <TableCaption className='border-t pt-2 text-left text-h5 italic'>Тарифы пересматриваются не реже одного раза в месяц и могут быть изменены в случае существенного изменения цен от провайдера или изменения курса валют.
                Всех наших клиентов о любых изменениях тарифов мы оповещаем заранее.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='font-bold text-black text-h5'>Провайдер</TableHead>
                  <TableHead className='font-bold text-black text-h5 w-[46%] pr-20 sm:pr-[auto]'>Модель</TableHead>
                  <TableHead className='font-bold text-black text-h5 w-[22%]'>Исходящие</TableHead>
                  <TableHead className='font-bold text-black text-h5 w-[22%]'>Входящие</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableRows.map((data, i) =>
                  <TableRow className="border-none" key={i}>
                    <TableCell className='text-h3 align-top'>{data.provider}</TableCell>
                    {data.model ?
                      <TableCell>
                        <div className='flex flex-col items-start'>
                          <p className='text-h4'>{data.model}</p>
                          {data.modelT ?
                            <span className='text-gray-400 text-h4'>{data.modelT}</span>
                            : null
                          }
                        </div>
                      </TableCell> : null}
                    {data.inc ?
                      data.out ? <TableCell className='text-h4'>{data.inc} <span className='text-gray-400 text-h4'>{data.incT}</span></TableCell>
                        : <TableCell colSpan={2} className='text-h4'>{data.inc} <span className='text-gray-400 text-h4'>{data.incT}</span></TableCell>
                      : null}

                    {data.out ? <TableCell className='text-h4'>{data.out} <span className='text-gray-400 text-h4'>{data.outT}</span></TableCell> : null}

                    {data.tollTip ? <TableCell colSpan={3} className='text-gray-400 text-h7'>{data.tollTip}</TableCell> : null}
                  </TableRow>
                )}

                <TableRow className="border-none">
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className='font-bold text-black text-h4'>Разрешение</TableCell>
                  <TableCell className='font-bold text-black text-h4'>Стоимость</TableCell>
                </TableRow>
                {otherRows.map((data) =>
                  <TableRow className="border-none">
                    <TableCell></TableCell>
                    <TableCell className='align-top text-[18px]'>{data.model}</TableCell>

                    <TableCell>
                      <div>
                        {data.res.map((res) =>
                          <div className='flex gap-1 text-h4'>
                            {res}
                            <span className='text-gray-400 text-h4'>{data.resT}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div>
                        {data.price.map((pr) =>
                          <div className='flex gap-1 text-nowrap text-h4'>
                            <p>{pr}</p>
                            <span className='text-gray-400 text-h4'>{data.priceT}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>

                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h3 className='text-h2'>Большие объемы? Нет проблем!</h3>
        <div className='flex flex-col'>
          <h4 className='text-h4'>Для крупных клиентов с большими объемами потребления мы предоставляем скидки и индивидуальные условия.</h4>
          <h4 className='text-h4'><a href="" className='underline underline-offset-2'>Нажмите здесь</a>, если интересуют подробности.</h4>
        </div>
        
      </MainLayout>
    </>
  )
}

export default Rates