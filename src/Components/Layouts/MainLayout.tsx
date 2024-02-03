import React from 'react'
import Header from '../Nav/Header'
import Footer from '../Nav/Footer'

const MainLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="md:w-screen md:h-screen flex flex-col items-center gap-2 md:gap-6 bg-secondaryA overflow-x-hidden">
            <Header />
            <div className='my-2 md:my-6 max-w-[95%] lg:max-w-[65%] flex flex-col items-start gap-8'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout