import { Input } from './input'
import { Label } from './label'
interface propps  {
    label: string,
    plc: string
}

const InputWLabel = ({label, plc}: propps) => {
    return (
        <div className="grid w-full max-w-md items-center gap-1.5">
            <Label className='text-[10px] text-[#4B5563]'>{label}</Label>
            <Input type="email" id="email" placeholder={plc} className='text-h5'/>
        </div>
    )
}

export default InputWLabel