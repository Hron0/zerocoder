import React, { useEffect, useState } from 'react'
import Sidebar from '../Nav/Sidebar'
import { cn } from '@/lib/utils'
import useWindowDimensions from '@/lib/windowD'
import cog from '@/assets/cog.png'
import user from '@/assets/user.png'
import key from '@/assets/key.png'
import eye from '@/assets/eye.png'
import exit from '@/assets/exit.png'

interface sidebarRoutes {
    route: string,
    img?: string,
    name: string;
  }

const AdminLayout = ({ children }: React.PropsWithChildren) => {
    const [sideBar, setSideBar] = useState(false)
    const { width } = useWindowDimensions()
    let mobile: boolean = width < 1024

    const sidebarRoutes: sidebarRoutes[] = [
        { route: '/', img: cog, name: 'Настройки' },
        { route: '/profile', img: user, name: 'Пользователи' },
        { route: '/profile/apiKey', img: key, name: 'Ключи' },
        { route: '/', img: eye, name: 'Логи' },
        { route: '/', img: exit, name: 'Выход' },
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
                sideBar ? 'bg-gray-400/75 lg:bg-secondaryB' : '',
                'z-20 w-full flex flex-col items-start p-4 min-h-[100%]'
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

export default AdminLayout