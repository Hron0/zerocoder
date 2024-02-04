import { cn } from '@/lib/utils'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
import { Button } from '@/Components/UI/button';
import menu from '@/assets/menu.svg';

interface SidebarProps {
  sideBar: boolean;
  setSideBar: (value: boolean) => void;
  sidebarRoutes: sidebarRoutes[]
}

interface sidebarRoutes {
  route: string,
  img?: string,
  name: string;
}

const Sidebar = ({ sideBar, setSideBar, sidebarRoutes }: SidebarProps) => {

  const downRoutes: sidebarRoutes[] = [
    { route: '/docs', name: 'Документация' },
    { route: '/profile/balance', name: 'Цены' },
    { route: '', name: 'Условия пользования' },
    { route: '', name: 'Политика конфиденциальности' },
  ]

  return (
    <>
      <Button variant="ghost" className="fixed lg:hidden z-[31]"
        onClick={() => setSideBar(!sideBar)}
      >
        <img src={menu} alt="menu" width={24}/>
      </Button>
      <div className={cn(
        'max-w-[70%] h-full flex flex-col justify-between items-start gap-4 px-3 py-6 z-30 bg-secondaryA border-r-2 border-secondaryB',
        'fixed lg:static transition duration-150 ease-in-out',
        sideBar ? 'translate-x-0' : 'translate-x-[-350px]'
      )}>
        <div className='flex flex-col items-start h-[20%] pt-6 lg:pt-3 pl-1 w-full'>
          <img src={Logo} alt="Logo" className='pb-3' width={120} />

          {sidebarRoutes.map((data) =>
            <Link to={data.route} className='flex items-center gap-4 hover:bg-[#f1f1f1] py-3 pl-3 pr-16 rounded-xl'>
              <img src={data.img} alt={`${data.name}`} className='w-6 h-6' />
              <span className='text-lg lg:text-xl font-medium'>{data.name}</span>
            </Link>
          )}

        </div>

        <div className='flex w-full flex-col items-start pt-3 pb-1 pl-1 gap-2 border-t-[1px] border-gray-400/60 text-wrap md:text-nowrap'>
          {downRoutes.map((route) =>
            <Link to={route.route} className='font-medium text-lg'>{route.name}</Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar