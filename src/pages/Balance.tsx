import ProfileLayout from '@/Components/Layouts/ProfileLayout'
import BalanceDialog from '@/Components/UI/BalanceDialog'
import InputWBtn from '@/Components/UI/InputWBtn'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/UI/table'

const Balance = () => {
    return (
        <>
            <ProfileLayout>
                <div className="w-full h-full flex flex-col items-center pt-16 px-4 lg:px-0">
                    <div className='flex flex-col items-start gap-10 w-full md:w-1/2 2xl:w-[60%] relative'>
                        <h1 className='text-xl lg:text-5xl font-medium'>Аккаунт</h1>
                        <div className='flex flex-col items-start gap-5 w-full md:w-[75%]'>
                            <BalanceDialog  btn='Пополнить' plc='0,00 Р'/>
                        </div>
                        <h1 className='text-xl lg:text-5xl font-medium'>Потребление</h1>

                        <Table className='w-full xl:w-[60%] relative border-b-[1px]'>
                            <TableBody>
                                <TableRow className='w-full border-dashed'>
                                    <TableCell>Сегодня</TableCell>
                                    <TableCell className='text-right'>0,00 Р</TableCell>
                                </TableRow>
                                <TableRow className='w-full border-dashed'>
                                    <TableCell>Вчера</TableCell>
                                    <TableCell className='text-right'>1230,00 Р</TableCell>
                                </TableRow>
                                <TableRow className='w-full border-dashed'>
                                    <TableCell>Последние 7 дней</TableCell>
                                    <TableCell className='text-right'>23090,00 Р</TableCell>
                                </TableRow>
                                <TableRow className='w-full border-dashed'>
                                    <TableCell>Сегодня</TableCell>
                                    <TableCell className='text-right'>0,00 Р</TableCell>
                                </TableRow>
                                <TableRow className='w-full border-dashed'>
                                    <TableCell>Сегодня</TableCell>
                                    <TableCell className='text-right'>0,00 Р</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <h1 className='text-xl lg:text-5xl font-medium'>История платежей</h1>
                        
                        <Table className='w-full xl:w-[60%] relative border-b-[1px]'>
                            <TableHeader>
                                <TableRow className='w-full'>
                                    <TableHead>Дата</TableHead>
                                    <TableHead className='text-right'>Сумма</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className='w-full'>
                                    <TableCell>01.02.2024</TableCell>
                                    <TableCell className='text-right'>19000,00 Р</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </ProfileLayout>
        </>
    )
}

export default Balance