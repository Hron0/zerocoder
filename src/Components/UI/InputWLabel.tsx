import React from 'react'
import { Input } from './input'
import { Label } from './label'
interface propps  {
    label: string,
    plc: string
}

const InputWLabel = ({label, plc}: propps) => {
    return (
        <div className="grid w-full max-w-md items-center gap-1.5">
            <Label>{label}</Label>
            <Input type="email" id="email" placeholder={plc}/>
        </div>
    )
}

export default InputWLabel