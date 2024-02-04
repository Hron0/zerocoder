import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/UI/table'
import { ScrollArea, ScrollBar } from '@/Components/UI/scroll-area'
import { Checkbox } from '../UI/checkbox'
import { Label } from '../UI/label'
import { ChevronDown } from 'lucide-react'

const UsersTable = () => {
    return (
    <>
        <ScrollArea className='w-full h-full'>
            <Table>
                <TableHeader>
                    <TableRow className='flex'>
                        <TableHead className='w-64 flex flex-row items-center justify-between border-r-2 border-gray-800/35 !pr-2'>
                            <Checkbox />
                            <Label className='pr-12'>Имя</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-[22rem] flex flex-row items-center justify-between border-r-2'>
                            <Label>Ник</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-52 flex flex-row items-center justify-between border-r-2'>
                            <Label>ID</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-36 flex flex-row items-center justify-between border-r-2'>
                            <Label>Версия</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-36 flex flex-row items-center justify-between border-r-2'>
                            <Label>Запросы</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-[8rem] flex flex-row items-center justify-between border-r-2'>
                            <Label>Дата</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-36 flex flex-row items-center justify-between border-r-2'>
                            <Label>Вышел</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-40 flex flex-row items-center justify-between border-r-2'>
                            <Label>GPT</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-36 flex flex-row items-center justify-between border-r-2'>
                            <Label>goal</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-40 flex flex-row items-center justify-between border-r-2'>
                            <Label>minimal requirements</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-36 flex flex-row items-center justify-between border-r-2'>
                            <Label>site</Label>
                            <ChevronDown/>
                        </TableHead>
                        <TableHead className='w-36 flex flex-row items-center justify-between border-r-2 bg-secondaryC'>
                            <Label>Note</Label>
                            <ChevronDown/>
                        </TableHead>
                    </TableRow>
                </TableHeader>
            </Table>
            <ScrollBar />
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    </>
    )
}

export default UsersTable