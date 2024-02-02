import { cn } from '@/lib/utils'
import Logo from '../../assets/Logo.png'
import home from '../../assets/home.png'
import lock from '../../assets/lock.png'
/*import key from '../../assets/key.png'
import box from '../../assets/box.png'
import exit from '../../assets/exit.png'
import { Link } from 'react-router-dom'; */
import { Button } from '@/Components/UI/button';

interface SidebarProps {
  sideBar: boolean;
  setSideBar: (value: boolean) => void;
}



const Sidebar = ({ sideBar, setSideBar }: SidebarProps) => {

  return (
    <>
      <Button variant="ghost" className="fixed lg:hidden z-[31]"
        onClick={() => setSideBar(!sideBar)}
      >
        <img src={lock} alt="menu" />
      </Button>
      <div className={cn(
        'max-w-[70%] h-full flex flex-col justify-between items-start gap-4 px-3 py-6 z-30 bg-secondaryA border-r-2 border-secondaryB',
        'fixed lg:static transition duration-150 ease-in-out',
        sideBar ? 'translate-x-0' : 'translate-x-[-350px]'
      )}>
        <div className='flex flex-col items-start h-[20%] pt-6 lg:pt-3 pl-1 w-full'>
          <img src={Logo} alt="Logo" className='pb-3' width={120} />

          <a href="" className='flex items-center gap-4 hover:bg-[#f1f1f1] py-3 pl-3 pr-16 rounded-xl'>
            <img src={home} alt="Home" className='w-6 h-6' />
            <span className='text-lg lg:text-xl font-medium'>Главная</span>
          </a>
        </div>

          <div className='flex w-full flex-col items-start pt-3 pb-1 pl-1 gap-2 border-t-[1px] border-gray-400/60 text-nowrap'>
            <a href="" className='font-medium text-lg'>Документация</a>
            <a href="" className='font-medium text-lg'>Цены</a>
            <a href="" className='font-medium text-lg'>Условия использования</a>
            <a href="" className='font-medium text-lg'>Политика конфиденциальности</a>
          </div>
      </div>
    </>
  )
}

export default Sidebar