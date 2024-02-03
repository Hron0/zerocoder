import { Input } from './input'
import { Button } from './button'
import st from './CodeShow.module.css'
import { cn } from '@/lib/utils'

const InputWBtn = ({}) => {

    return (
        <pre className={cn('mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900',
        st.code)}>
            <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm' data-language='bash'>
                <span className={st.line}>

                </span>
            </code>
        </pre>
    )
}

export default InputWBtn