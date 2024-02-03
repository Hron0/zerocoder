import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-footerbg px-[7%] lg:px-[18%] py-[5%] flex flex-col lg:flex-row items-start gap-5 lg:gap-[4rem]'>
      <div className='py-3'>
        <h1 className='text-sm text-footerTxt'>Доступ к последним разработкам мировых лидеров в области
          AI для вашего проекта или бизнеса в России. Без VPN и
          блокировок. Оплата в рублях.</h1>
      </div>

      <div className='flex flex-col md:flex-row items-start gap-4 md:gap-[4rem]
      w-full lg:w-auto justify-center
      '>
        <div className='grid grid-rows-3 items-start gap-2'>
          <h4 className='text-footerTxt'>ДОКУМЕНТЫ</h4>
          <a href="" className='text-sm text-white/70 w-max'>Условия использования</a>
          <a href="" className='text-sm text-white/70 w-max'>Политика конфиденциальности</a>
        </div>
        <div className='grid grid-rows-3 items-start gap-2'>
          <h4 className='text-footerTxt'>ПРОДУКТЫ</h4>
          <a href="" className='text-sm text-white/70 w-max'>Тарифы</a>
          <a href="" className='text-sm text-white/70 w-max'>Документация</a>
        </div>
        <div className='grid grid-rows-2 items-start gap-2'>
          <h4 className='text-footerTxt'>КОНТАКТЫ</h4>
          <a href="" className='text-sm text-white/70 w-max'>Связаться с нами</a>
        </div>
      </div>

    </div>
  )
}

export default Footer