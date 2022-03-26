import React from 'react'

const Navigation = ({ children }) => {
    return (
        <aside className='hidden py-10 bg-slate-50 w-[13rem]  top-[6.8125rem] px-8 overflow-y-auto  xl:block h-96 m-3 fixed z-20 right-[max(0px,calc(50%-45rem))]'>
            {children}
        </aside>
    )
}

const NavItem = ({ children, to }) => {
    return (
        <div className='w-fit bg-blue-500'>
            <a href={to}>{children}</a>
        </div>
    )
}

export default Navigation
export { NavItem }
