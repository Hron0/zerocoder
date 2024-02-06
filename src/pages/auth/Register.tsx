import { Button } from '@/Components/UI/button'
import { Input } from '@/Components/UI/input'
import Logo from '@/assets/Logo.png'
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

interface IUserData {
  name: string;
  surName: string;
  email: string;
};

const Register = () => {
  const [reg, setLogin] = useState({ login: "", password: "" })
  const [error, setError] = useState({ login: '', password: '' })

  const navigate = useNavigate();

  const LoginDataSchema = z.object({
    login: z.string({ invalid_type_error: "Введите логин", }),
    password: z.string().min(3, { message: 'Пароль должен быть длиннее 3-х символов.' })
  })

  const handleRegister = async (e: FormEvent) => {
    setError({ login: '', password: '' })
    e.preventDefault()
    try {
      const validatedData = LoginDataSchema.safeParse({
        login: reg.login,
        password: reg.password
      })

      if (!validatedData.success) {
        const ErrFields = validatedData.error.flatten().fieldErrors
        const errorState = {
          login: Array.isArray(ErrFields?.login) ? ErrFields.login[0] : '',
          password: Array.isArray(ErrFields?.password) ? ErrFields.password[0] : '',
        };
        
        setError(errorState)
        return console.log(error);
      }

      /*TODO: Разобраться с апи, по сути лишь адрес поменять и всё будет работать */
      await fetch('https://api.zerocoder.pw/company/create', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(validatedData.data),
      }).then(() => {
        alert("Вы успешно зарегестрировались, теперь войдите в ваш аккаунт.")
        setTimeout(() => {navigate("/auth/login"), 4000})})
      .catch((err) => {console.log(`Fetch error: -${err}`)})

    } catch (err: any) {
      setError({ ...reg, password: err })
    }

  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-white  '>
      <div className='flex flex-col items-center gap-6 bg-secondaryB w-full md:w-[60%] xl:w-[20%] rounded-md max-h-[70%] px-4 py-5'>
        <img src={Logo} alt="Логотип" width={150} />
        <h2 className='text-lg lg:text-3xl font-medium self-start'>Регистрация</h2>
        <form onSubmit={handleRegister} className='flex flex-col gap-2 w-full'>
          <Input placeholder='Логин' type='name' value={reg.login} onChange={e => setLogin({ ...reg, login: e.target.value })} />
          <Input placeholder='Пароль' type='password' value={reg.password} onChange={e => setLogin({ ...reg, password: e.target.value })} />
          {error?.password ?
            <span className='text-md text-red-600'>{error.password}</span>
            : null
          }

          <Button variant="destructive" className='mt-8' type='submit'>Зарегестрироваться</Button>
        </form>

        <h3 className='text-md lg:text-lg font-medium mt-3'>
          Уже зарегестрированы? <Link to={'/auth/register'} className='text-destructive underline underline-offset-2'>Вход</Link>
        </h3>
      </div>
    </div>
  )
}

export default Register