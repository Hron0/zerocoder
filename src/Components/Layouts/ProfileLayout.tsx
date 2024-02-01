import React, { useEffect, useState } from 'react'
import Sidebar from '../Nav/Sidebar'
import { cn } from '@/lib/utils'
import useWindowDimensions from '@/lib/windowD'

const ProfileLayout = ({ children }: React.PropsWithChildren) => {
    const [sideBar, setSideBar] = useState(false)
    const { width } = useWindowDimensions()
    let mobile: boolean = width < 1024

    useEffect(() => {
        if (!mobile) {
            setSideBar(true)
        }
    }, [])


    return (
        <div className="md:w-screen md:h-screen flex flex-row bg-white">
            <Sidebar sideBar={sideBar} setSideBar={setSideBar}/>
            <div className={cn(
                sideBar ? 'bg-gray-400/75 lg:bg-transparent' : '',
                'z-20'
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