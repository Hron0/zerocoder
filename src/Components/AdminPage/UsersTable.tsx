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
import { ChevronDown, ChevronRight, Search } from 'lucide-react'
import { Button } from '../UI/button'
import { Badge } from '../UI/badge'

interface UserData {
    name: string;
    nick: string;
    id: string;
    version: "US" | "Singapore";
    needs: string[];
    date: string;
    out: string;
    GPT: string;
    goal: string;
    minReq: string;
    site: string;
    note: string;
}

const UsersTable = () => {
    const UsersData: UserData[] = [
        { name: "BIZON GROUP", nick: "https://www.f6s/bizongroup/about", id: "https://bizon.com.kz", version: "US", needs: ["cybersecurity", "software"], date: "07.03.2020", out: "Да", GPT: ">10 000", goal: "accelerate", minReq: "idea", site: "F6S", note: "" },
        { name: "BIZON GROUP", nick: "https://www.f6s/bizongroup/about", id: "https://bizon.com.kz", version: "US", needs: ["cybersecurity", "software"], date: "07.03.2020", out: "Да", GPT: ">10 000", goal: "accelerate", minReq: "idea", site: "F6S", note: "" },
        { name: "BIZON GROUP", nick: "https://www.f6s/bizongroup/about", id: "https://bizon.com.kz", version: "US", needs: ["cybersecurity", "software"], date: "07.03.2020", out: "Да", GPT: ">10 000", goal: "accelerate", minReq: "idea", site: "F6S", note: "" },
        { name: "BIZON GROUP", nick: "https://www.f6s/bizongroup/about", id: "https://bizon.com.kz", version: "Singapore", needs: ["cybersecurity", "software"], date: "07.03.2020", out: "Да", GPT: ">10 000", goal: "accelerate", minReq: "idea", site: "F6S", note: "" },
    ]

    return (
        <>
            <ScrollArea className='w-full h-full'>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead className='w-80 relative border-r-2 border-gray-800/35'>
                                <div className='w-full flex flex-row items-center justify-between pr-2'>
                                    <Checkbox />
                                    <Label className='pr-12'>Имя</Label>
                                    <ChevronDown />
                                </div>
                            </TableHead>
                            <TableHead className='w-[19rem] relative border-r-2'>
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
                        <TableRow className='rounded-lg border-2'>
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
                                <TableCell key={i} className='relative'></TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell className='border-r-2 border-gray-800/35'>
                                <div className='w-full flex flex-row items-center pr-2 justify-between'>
                                    <div className='flex flex-row items-center gap-3'>
                                        <ChevronDown />
                                        <div className='flex flex-col items-start'>
                                            <span className='text-xs text-gray-400'>Сегмент 1</span>
                                            <Checkbox />
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-3'>
                                        <h6 className='text-xs text-gray-400'>Кол-во </h6>
                                        <h6 className='text-xs'>265</h6>
                                    </div>
                                    <Button variant="ghost">
                                        <Search />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        {UsersData.map((data, i) =>
                            <TableRow key={i}>
                                <TableCell className='border-r-2 border-gray-800/35'>{data.name}</TableCell>
                                <TableCell className='border-[1px]'><a href={data.nick} className='underline'>{data.nick}</a></TableCell>
                                <TableCell className='border-[1px]'><a href={data.id} className='underline'>{data.id}</a></TableCell>
                                <TableCell className='border-[1px]'><Badge variant={`${data.version}`}>{data.version}</Badge></TableCell>
                                <TableCell className='border-[1px] relative'>
                                    <ScrollArea className='w-full'>
                                        <div className='flex flex-row gap-1'>
                                            {data.needs.map((data, i) =>
                                                <Badge variant={`${data}`}>{data}</Badge>
                                            )}
                                        </div>
                                        <ScrollBar />
                                    </ScrollArea>
                                </TableCell>
                                <TableCell className='border-[1px]'>{data.date}</TableCell>
                                <TableCell className='border-[1px]'>{data.out}</TableCell>
                                <TableCell className='border-[1px]'>{data.GPT}</TableCell>
                                <TableCell className='border-[1px]'>{data.goal}</TableCell>
                                <TableCell className='border-[1px]'>{data.minReq}</TableCell>
                                <TableCell className='border-[1px]'>{data.site}</TableCell>
                                <TableCell className='border-[1px] bg-secondaryC'>{data.note}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <ScrollBar />
                <ScrollBar orientation='horizontal' />
            </ScrollArea >
        </>
    )
}

export default UsersTable