import React from 'react'
import Sidebar from '../Components/Nav/Sidebar'

const ApiKeys = () => {
    return (
        <div className="md:w-screen md:h-screen overflow-hidden flex flex-row bg-white">
            <Sidebar />
            <div className="w-full h-full flex flex-col items-center pt-24">
                <div className='flex flex-col items-start gap-6 w-2/5'>
                    <h1 className='text-5xl font-medium'>Ключи API</h1>
                    <h4 className='text-xl'>Ниже вы можете просмотреть ваши ключи API и аннулировать те из них, которые больше не
                        нужны или были скомпрометированы. Обратите внимание, что увидеть ключ целиком можно
                        только один раз, сразу после создания.</h4>
                    <h4 className='text-xl'>Пожалуйста, не передавайте ключи API третьим лицам, не используйте в открытом виде в коде
                        вашего приложения и не публикуйте в открытом доступе. В случае утечки ключа API,
                        аннулируйте его как можно скорее. С нашей стороны мы так же оставляем за собой право
                        аннулировать ключи API в случае нарушения условий использования или обнаружения утечки.</h4>
                </div>

            </div>
        </div>
    )
}

export default ApiKeys