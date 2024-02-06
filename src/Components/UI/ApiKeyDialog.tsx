import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"
import { Input } from './input'
import { Button } from './button'
import plus from '@/assets/plus.svg'
import copy from "@/assets/copy.svg"
import { FormEventHandler } from "react"

interface ApiKeyDialogProps {
    generateKey: FormEventHandler;
    ApiKey: string;
}

const ApiKeyDialog = ({generateKey, ApiKey}: ApiKeyDialogProps) => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <form onSubmit={generateKey}>
                        <Button variant="destructive" type="submit">
                            <img src={plus} alt="+" width={24} /> <span>Создать новый ключ API</span>
                        </Button>
                    </form>
                </DialogTrigger>
                <DialogContent className="max-w-[80%] lg:max-w-[25%]">
                    <DialogHeader>
                        <DialogTitle className='border-b-[1px] pb-4'>Новый ключ API</DialogTitle>
                    </DialogHeader>
                    <h4 className='text-md'>Новый ключ API успешно создан. Пожалуйста, сохраните его в
                        надежном месте, так как вы больше не сможете увидеть его целиком.</h4>
                    <div className='relative flex flex-col items-end gap-5'>
                        <div className="flex w-full max-w-xl items-center space-x-2 relative">
                            <Input type="text" placeholder='Ваш ключ API генерируется...' className='pl-3 pr-5 py-6 text-lg'
                                value={ApiKey} readOnly
                            />
                            <Button variant="ghost" className='rounded-3xl !absolute right-1'
                            onClick={() => { navigator.clipboard.writeText(ApiKey) }}>
                                <img src={copy} alt="" />
                            </Button>
                        </div>
                        <DialogClose asChild>
                            <Button variant="destructive">Готово</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ApiKeyDialog