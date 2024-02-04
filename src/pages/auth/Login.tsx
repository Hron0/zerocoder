import { Button } from '@/Components/UI/button'
import { Input } from '@/Components/UI/input'
import Logo from '@/assets/Logo.png'
import { FormEvent, useState } from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { z } from 'zod';

interface IUserData {
  name: string;
  surName: string;
  email: string;
 };

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" })
  const [error, setError] = useState({ email: '', password : ''})
  const signIn = useSignIn<IUserData>()

  const LoginDataSchema = z.object({
    email: z.string().email({ message: 'Введите валидную почту' }),
    password: z.string().min(3, { message: 'Пароль должен быть длиннее 3 символов.' })
  })

  const handleLogin = async (e: FormEvent) => {
    setError({email: '', password : ''})
    e.preventDefault()
    try {
      const validatedData = LoginDataSchema.safeParse({
        email: login.email,
        password: login.password
      })

      if (!validatedData.success) {
        return setError(validatedData.error.flatten().fieldErrors);
        /* console.log(error.password[0]); */
      }  

      const response = await fetch('https://api.zerocoder.pw/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData.data),
      });

      console.log(response)

/*       signIn({
        auth: {
          token: response.data.jwt
        },
        userState: {
          name: response.data.name,
          surName: response.data.surName,
          email: response.data.email,
        }
      }) */

    } catch (err: any) {
      setError({...login, password: err})
    }


  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-white  '>
      <div className='flex flex-col items-center gap-6 bg-secondaryB w-full md:w-[60%] xl:w-[20%] rounded-md max-h-[70%] px-4 py-5'>
        <img src={Logo} alt="Логотип" width={150} />
        <h2 className='text-lg lg:text-3xl font-medium self-start'>Вход</h2>
        <form onSubmit={handleLogin} className='flex flex-col gap-2 w-full'>
          <Input placeholder='Эл. почта' type='email' value={login.email} onChange={e => setLogin({ ...login, email: e.target.value })} />
          <Input placeholder='Пароль' type='password' value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} />
          {error?.password ?
            <span className='text-md text-red-600'>{error.password[0]}</span>
          : null
          }
          <a href="" className='self-start pl-2'>Забыли пароль?</a>

          <Button variant="destructive" className='mt-8' type='submit'>Войти</Button>
        </form>

        <h3 className='text-md lg:text-lg font-medium mt-3'>
          Нет аккаунта? <a href='' className='text-destructive underline underline-offset-2'>Регистрация</a>
        </h3>
      </div>
    </div>
  )
}

export default Login