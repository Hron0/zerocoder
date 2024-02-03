import { Button } from '@/Components/UI/button';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import useWindowDimensions from '@/lib/windowD';
import menu from '@/assets/menu.svg'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/Components/UI/sheet'

interface RawRoutes {
  route: string,
  name: string;
}


const Header = () => {
  const location = useLocation()
  const { width } = useWindowDimensions()

  const RawRoutes: RawRoutes[] = [
    { route: '/', name: 'Главная', },
    { route: '/profile/balance', name: 'Бизнес' },
    { route: '/rates', name: 'Тарифы' },
    { route: '/docs', name: 'Документация' },
    { route: '', name: 'Контакты' },
  ]

  const headerRoutes = RawRoutes.map((item) => ({
    ...item,
    highlight: location.pathname === item.route
  }))

  return (
    <>
      {width > 450 ?
        <div className='w-full flex flex-row items-end justify-between bg-white px-[5%] lg:px-[18%] py-3'>
          <nav className='flex flex-row gap-4'>
            {headerRoutes.map((data) =>
              <Link to={data.route} className={cn(
                'h-fit hover:text-navhover hover:underline underline-offset-2 transition-colors',
                data.highlight && 'text-navhover underline'
              )} >{data.name}</Link>
            )}
          </nav>

          <Link to={"/auth/login"}
            className='inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm 
          ring-offset-background transition-colors focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
          disabled:opacity-50 h-10 px-4 py-2
          bg-destructive text-destructive-foreground hover:bg-green-500/50 rounded-sm font-semibold'
          >Вход</Link> {/* Lol */}
        </div>
        :
        <div className='flex self-start'>
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" className="z-[31]">
                <img src={menu} alt="menu" width={25}/>
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <div className='max-w-[50%] flex flex-col items-start pt-6 gap-6'>
                <Link to={"/auth/login"}
                  className='inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm 
                ring-offset-background transition-colors focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                disabled:opacity-50 h-10 px-6 py-2
                bg-destructive text-destructive-foreground hover:bg-green-500/50 rounded-sm font-semibold'
                >Вход</Link>
                <div className='flex flex-col items-start gap-4 w-full border-t-2'>
                  {headerRoutes.map((data) =>
                    <Link to={data.route} className={cn(
                      'h-fit hover:text-navhover hover:underline underline-offset-2 transition-colors',
                      data.highlight && 'text-navhover underline'
                    )} >{data.name}</Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      }
    </>
  )
}

export default Header