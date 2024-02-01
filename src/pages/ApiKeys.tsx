import React from 'react'
import Sidebar from '../Components/Nav/Sidebar'
import { Button } from '@/Components/UI/button'
import { Badge } from '@/Components/UI/badge'
import plus from '../assets/plus.svg'
import ProfileLayout from '@/Components/Layouts/ProfileLayout'

const ApiKeys = () => {
    return (
        <>
            <ProfileLayout>
                <div className="w-full h-full flex flex-col items-center pt-24 px-4 lg:px-0">
                    <div className='flex flex-col items-start gap-6 md:w-1/2 2xl:w-2/5 relative'>
                        <h1 className='text-xl lg:text-5xl font-medium'>Ключи API</h1>
                        <h4 className='text-md lg:text-xl font-normal'>Ниже вы можете просмотреть ваши ключи API и аннулировать те из них, которые больше не
                            нужны или были скомпрометированы. Обратите внимание, что увидеть ключ целиком можно
                            только один раз, сразу после создания.</h4>
                        <h4 className='text-md lg:text-xl font-normal'>Пожалуйста, не передавайте ключи API третьим лицам, не используйте в открытом виде в коде
                            вашего приложения и не публикуйте в открытом доступе. В случае утечки ключа API,
                            аннулируйте его как можно скорее. С нашей стороны мы так же оставляем за собой право
                            аннулировать ключи API в случае нарушения условий использования или обнаружения утечки.</h4>
                        <table className='w-full text-left h-20'>
                            <tr className='border-b-2 border-secondaryB h-8'>
                                <td className='pr-8'><h4 className='font-semibold'>Ключ</h4></td>
                                <td className='pr-8'><h4 className='font-semibold'>Создан</h4></td>
                                <td className='pr-8'><h4 className='font-semibold col-span-2'>Последний вызов</h4></td>
                            </tr>
                            <tr className='border-b-2 border-secondaryB h-8 mt-8'>
                                <td className='pr-8'>sk-...123</td>
                                <td className='pr-8'>date</td>
                                <td className='pr-8'>Статус</td>
                                <td className='pr-8 text-right'>Помойка</td>
                            </tr>
                        </table>

                        <Button variant="destructive">
                            <img src={plus} alt="+" width={24} /> <span>Создать новый ключ API</span>
                        </Button>

                        <h4 className='text-md lg:text-xl font-normal'>
                            <Badge className='mr-3'>ВАЖНО!</Badge>
                            Ключи ProxyAPI не будут работать напрямую с OpenAI API или в приложениях,
                            плагинах, библиотеках и т.п., в которых нельзя переопределить путь к API. Пожалуйста,
                            внимательно ознакомьтесь с <a href="" className='text-blue-500'>документацией</a>.
                        </h4>
                    </div>

                </div>
            </ProfileLayout>
        </>
    )
}

export default ApiKeys