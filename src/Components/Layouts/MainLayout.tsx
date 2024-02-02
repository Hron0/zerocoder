import React from 'react'
import Header from '../Nav/Header'
import Footer from '../Nav/Footer'

const MainLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="md:w-screen md:h-screen flex flex-col bg-secondaryA overflow-x-hidden">
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout