import { Button } from '@/Components/UI/button'
import { Input } from '@/Components/UI/input'
import Logo from '@/assets/Logo.png'

const Login = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-white  '>
      <div className='flex flex-col items-center gap-6 bg-secondaryB w-full md:w-[60%] xl:w-[20%] rounded-md max-h-[70%] px-4 py-5'>
        <img src={Logo} alt="Логотип" width={150}/>
        <h2 className='text-lg lg:text-3xl font-medium self-start'>Вход</h2>
        <form action="" className='flex flex-col gap-2 w-full'>
          <Input placeholder='Эл. почта' type='email'/>
          <Input placeholder='Пароль' type='password'/>
          <a href="" className='self-start pl-2'>Забыли пароль?</a>

          <Button variant="destructive" className='mt-8'>Войти</Button>
        </form>

        <h3 className='text-md lg:text-lg font-medium mt-3'>
          Нет аккаунта? <a href='' className='text-destructive underline underline-offset-2'>Регистрация</a>
        </h3>
      </div>
    </div>
  )
}

export default Login