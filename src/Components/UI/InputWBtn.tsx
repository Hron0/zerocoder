import { Input } from './input'
import { Button } from './button'

interface propps {
    btn: string,
    plc: string
}

const InputWBtn = ({ btn, plc }: propps) => {
    return (
        <div className="flex w-full max-w-xl items-center space-x-2 relative">
            <Input type="email" placeholder={plc} className='pl-3 pr-5 py-6 text-lg'/>
            <Button type="submit" variant="destructive" className='rounded-none !absolute right-1'>{btn}</Button>
        </div>
    )
}

export default InputWBtn