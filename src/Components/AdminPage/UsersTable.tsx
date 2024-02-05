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
import { ChevronDown, ChevronRight } from 'lucide-react'

const UsersTable = () => {
    return (
        <>
            <ScrollArea className='w-full h-full'>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead className='w-64 relative border-r-2 border-gray-800/35'>
                                <div className='w-full flex flex-row items-center justify-between pr-2'>
                                    <Checkbox />
                                    <Label className='pr-12'>Имя</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-[22rem] relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>Ник</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-52 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>ID</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-36 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>Версия</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-36 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>Запросы</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-[8rem] relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>Дата</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-36 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>Вышел</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-40 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>GPT</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-36 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>goal</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-40 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>minimal requirements</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-36 relative border-r-2'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>site</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-36 relative border-r-2 bg-secondaryC'>
                                <div className='w-full flex flex-row items-center justify-between'>
                                    <Label>Note</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className='w-64 relative border-r-2 border-gray-800/35'>
                                <div className='w-full flex flex-row items-center pr-2 justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <ChevronRight className='text-gray-600' />
                                        <Checkbox />
                                    </div>
                                    <div className='flex flex-row item-center gap-4'>
                                        <h6 className='text-xs text-gray-400'>Кол-во </h6>
                                        <span className='text-md'>2</span>
                                    </div>
                                </div>
                            </TableCell>
                            {Array.from({ length: 11 }, (_, i) => (
                                <TableCell key={i} className='border-r-2 relative'></TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
                <ScrollBar orientation='horizontal' />
            </ScrollArea >
        </>
    )
}

export default UsersTable