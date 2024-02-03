import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"
import { Input } from './input'
import { Button } from './button'
import paymentCard from '@/assets/paymentCards.svg'


interface propps {
    btn: string,
    plc: string
}

const BalanceDialog = ({ btn, plc }: propps) => {
    return (
        <>
            <div className="flex w-full max-w-xl items-center space-x-2 relative">
                <Input type="email" placeholder={plc} className='pl-3 pr-5 py-6 text-lg' />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button type="submit" variant="destructive" className='rounded-none !absolute right-1'>{btn}</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[80%] lg:max-w-[35%]">
                        <DialogHeader>
                            <DialogTitle className='border-b-[1px] pb-4'>Пополнение баланса</DialogTitle>
                        </DialogHeader>
                        <form action="" className='relative flex flex-col gap-5'>
                            <Input placeholder='Введите сумму пополнения' className='text-sm md:text-xl'/>
                            <div className='w-full flex flex-col items-end gap-4'>
                                <div className='flex flex-col md:flex-row items-end items- gap-3 md:gap-6'>
                                    <Button variant="destructive" className='rounded-xs'>Перейти к оплате</Button>
                                    <Button variant='secondary' className='rounded-xs'>Отмена</Button>
                                </div>
                                <img src={paymentCard} alt="" className='w-[200px] md:w-[400px]'/>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

export default BalanceDialog