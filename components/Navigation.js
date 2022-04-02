import React from 'react'
import reactDom from 'react-dom'
import { ContentSectionTitle } from '../components/ContentComponents'

const Navigation = ({ children }) => {
    return (
        <aside className='hidden py-10 bg-slate-50 w-[14rem] h-fit  top-[6.8125rem] px-8 overflow-y-auto  xl:block m-3 fixed z-20 right-[max(0px,calc(50%-50rem))]'>
            <h2 className='p-1 m-1 mb-4 text-xl font-bold'>Bu sayfadakiler</h2>
            {children}
        </aside>
    )
}

const NavItem = ({ children, to }) => {
    return (
        <div className='w-full p-2'>
            <a className='font-thin text-lg hover:text-green-600' href={to}>{children}</a>
        </div>
    )
}

export default Navigation
export { NavItem }
