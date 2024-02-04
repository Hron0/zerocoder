import React, { useEffect, useState } from 'react'
import Sidebar from '../Nav/Sidebar'
import { cn } from '@/lib/utils'
import useWindowDimensions from '@/lib/windowD'
import home from '../../assets/home.png'
import lock from '../../assets/lock.png'
import key from '../../assets/key.png'
import box from '../../assets/box.png'
import exit from '../../assets/exit.png'

interface sidebarRoutes {
    route: string,
    img?: string,
    name: string;
  }

const ProfileLayout = ({ children }: React.PropsWithChildren) => {
    const [sideBar, setSideBar] = useState(false)
    const { width } = useWindowDimensions()
    let mobile: boolean = width < 1024

    const sidebarRoutes: sidebarRoutes[] = [
        { route: '/', img: home, name: 'Главная' },
        { route: '/profile', img: lock, name: 'Аккаунт' },
        { route: '/profile/apiKey', img: key, name: 'Ключи API' },
        { route: '/profile/balance', img: box, name: 'Биллинг' },
        { route: '/exit', img: exit, name: 'Выход' },
      ]

    useEffect(() => {
        if (!mobile) {
            setSideBar(true)
        }
    }, [])

    return (
        <div className="md:w-screen md:h-screen flex flex-row bg-white overflow-x-hidden">
            <Sidebar sideBar={sideBar} setSideBar={setSideBar} sidebarRoutes={sidebarRoutes}/>
            <div className={cn(
                sideBar ? 'bg-gray-400/75 lg:bg-transparent' : '',
                'z-20 w-full'
            )}
                onClick={(e) => {
                    if (mobile) {
                        e.stopPropagation()
                        setSideBar(false)
                    }
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout