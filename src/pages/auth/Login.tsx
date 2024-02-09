import { Button } from '@/Components/UI/button'
import { Input } from '@/Components/UI/input'
import Logo from '@/assets/Logo.png'
import { FormEvent, useState } from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { Link } from 'react-router-dom';
import { z } from 'zod';

interface IUserData {
  name: string;
  surName: string;
  email: string;
};

const Login = () => {
  const [login, setLogin] = useState({ login: "", password: "" })
  const [error, setError] = useState({ login: '', password: '' })
  const signIn = useSignIn<IUserData>()

  const LoginDataSchema = z.object({
    login: z.string({ invalid_type_error: "Введите логин", }),
    password: z.string().min(3, { message: 'Пароль должен быть длиннее 3 символов.' })
  })

  const handleLogin = async (e: FormEvent) => {
    setError({ login: '', password: '' })
    e.preventDefault()
    try {
      const validatedData = LoginDataSchema.safeParse({
        login: login.login,
        password: login.password
      })

      if (!validatedData.success) {
        const ErrFields = validatedData.error.flatten().fieldErrors
        const errorState = {
          login: Array.isArray(ErrFields?.login) ? ErrFields.login[0] : '',
          password: Array.isArray(ErrFields?.password) ? ErrFields.password[0] : '',
        };
        return setError(errorState);
      }

      await fetch('https://api.zerocoder.pw/user/login', {
        method: 'POST',
        body: JSON.stringify(validatedData.data),
      }).then((res) => res.json())
        .then((response) => {
          console.log(response)

          signIn({
            auth: {
              token: response.data.jwt
            },
            userState: {
              name: response.data.name,
              surName: response.data.surName,
              email: response.data.email,
            }
          })
        }).catch((err) => console.log(err))

    } catch (err: any) {
      console.log(`Fetch error: -${err}`)
    }
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-white  '>
      <div className='flex flex-col items-center gap-6 bg-secondaryB w-full md:w-[60%] xl:w-[20%] rounded-md max-h-[70%] px-4 py-5'>
        <img src={Logo} alt="Логотип" width={150} />
        <h2 className='text-h1 self-start'>Вход</h2>
        <form onSubmit={handleLogin} className='flex flex-col gap-2 w-full'>
          <Input placeholder='Логин' type='name' value={login.login} onChange={e => setLogin({ ...login, login: e.target.value })} className='text-h5'/>
          <Input placeholder='Пароль' type='password' value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} className='text-h5'/>
          {error?.password ?
            <span className='text-md text-red-600'>{error.password}</span>
            : null
          }
          <a href="" className='self-start pl-2 text-h5'>Забыли пароль?</a>

          <Button variant="destructive" className='mt-8' type='submit'>Войти</Button>
        </form>

        <h3 className='text-h5 mt-3'>
          Нет аккаунта? <Link to={'/auth/register'} className='text-destructive underline underline-offset-2'>Регистрация</Link>
        </h3>
      </div>
    </div>
  )
}

export default Login