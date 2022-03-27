import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { MainContext } from '../context/context'

const Categories = ({ children }) => {
    const { ishidden } = useContext(MainContext)
    return (
        <aside className={`${ishidden ? "hidden" : ""} pt-5 bg-slate-50 ml-3 lg:block fixed z-20 inset-0 top-[7.8125rem] left-[max(0px,calc(50%-52rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto h-full max-h-[42.8rem]`}>
            <h2 className='p-1 m-1 mb-4 text-xl font-bold'>Kategoriler</h2>
            {children}
        </aside>
    )
}

const Category = ({ name, to }) => {
    return (
        <div className='w-full p-5 border-b-2'>
            <Link href={to}>
                <a className=''>{name}</a>
            </Link>
        </div>
    )
}


export default Categories
export { Category }