import React from 'react'

const Categories = ({ children }) => {
    return (
        <aside className='hidden pt-5 bg-slate-50 ml-3 lg:block fixed z-20 inset-0 top-[7.8125rem] left-[max(0px,calc(50%-52rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto h-full'>
            {children}
        </aside>
    )
}

const Category = ({ name, to }) => {
    return (
        <div className='w-full m-1 p-5 bg-slate-300'>
            <a href={to}>{name}</a>
        </div>
    )
}

export default Categories
export { Category }