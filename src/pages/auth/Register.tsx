import { Button } from '@/Components/UI/button'
import { Input } from '@/Components/UI/input'
import Logo from '@/assets/Logo.png'
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const Register = () => {
    const [login, setLogin] = useState({ email: "", password: "" })
    const [error, setError] = useState({ email: '', password: '' })

    const handleRegister = async () => {
        console.log("sd")
    }

    return (
        <div className='w-full h-screen flex items-center justify-center bg-white  '>
            <div className='flex flex-col items-center gap-6 bg-secondaryB w-full md:w-[60%] xl:w-[20%] rounded-md max-h-[70%] px-4 py-5'>
                <img src={Logo} alt="Логотип" width={150} />
                <h2 className='text-lg lg:text-3xl font-medium self-start'>Вход</h2>
                <form onSubmit={handleRegister} className='flex flex-col gap-2 w-full'>
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
                    Уже зарегестрированы? <Link to={"/auth/login"} className='text-destructive underline underline-offset-2'>Вход</Link>
                </h3>
            </div>
        </div>
    )
}

export default Register