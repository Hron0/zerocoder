import ProfileLayout from '@/Components/Layouts/ProfileLayout'
import { Input } from '@/Components/UI/input'
import InputWLabel from '@/Components/UI/InputWLabel'
import { Button } from '@//Components/UI/button';

const Profile = () => {
    return (
        <>
            <ProfileLayout>
                <div className="w-full h-full flex flex-col items-center pt-16 px-4 lg:px-0">
                    <div className='flex flex-col items-start gap-10 md:w-1/2 2xl:w-[60%] relative'>
                        <h1 className='text-xl lg:text-5xl font-medium'>Аккаунт</h1>
                        <form action="" className='flex flex-col items-start gap-5 w-full'>
                            <h1 className='text-lg lg:text-4xl font-medium'>Профиль</h1>
                            <div className='flex flex-row gap-6 w-[75%]'>
                                <InputWLabel label="Имя" plc="Имя" />
                                <InputWLabel label="Фамилия" plc="Фамилия" />
                            </div>
                            <Button variant="destructive" className='rounded-none'>Сохранить</Button>
                        </form>

                        <form action="" className='flex flex-col items-start gap-5 w-full'>
                            <h1 className='text-lg lg:text-4xl font-medium'>Эл. почта</h1>
                            <div className='flex flex-row gap-6 w-[75%]'>
                                <InputWLabel label="Эл.почта" plc="Эл.почта" />
                                <InputWLabel label="Пароль" plc="Пароль" />
                            </div>
                            <Button variant="destructive" className='rounded-none'>Сменить эл. почту</Button>
                        </form>

                        <form action="" className='flex flex-col items-start gap-5 w-full'>
                            <h1 className='text-lg lg:text-4xl font-medium'>Пароль</h1>
                            <Input placeholder="Текущий пароль" type='password' className='w-[75%]'/>
                            <div className='flex flex-row gap-6 w-[75%]'>
                                <Input placeholder="Новый пароль" type='password'/>
                                <Input placeholder="Подтверждение пароля" type='password'/>
                            </div>
                            <Button variant="destructive" className='rounded-none'>Сменить эл. почту</Button>
                        </form>
                    </div>
                </div>
            </ProfileLayout>
        </>
    )
}

export default Profile