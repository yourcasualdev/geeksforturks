import React from 'react'

const Categories = ({ children }) => {
    return (
        <aside className='hidden bg-blue-50 sm:block fixed z-20 inset-0 top-[7.8125rem] left-[max(0px,calc(50%-52rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto h-96'>
            hiddden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(2px,calc(50%-15rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto
            {children}
        </aside>
    )
}

export default Categories