import React from 'react'

const Content = ({ children }) => {
    return (
        <main className='bg-slate-50 p-5 w-full  m-3 max-w-3xl mx-auto pt-10 sm:w-[45rem] lg:ml-[max(0px,calc(50%-12rem))] xl:ml-[max(0px,calc(50%-20rem))]'>
            {children}
        </main>
    )
}

const ContentTitle = ({ children }) => {
    return (
        <div>
            <h2 className='text-5xl font-bold font-sans mb-2'>{children}</h2>
        </div>
    )
}

const ContentSubTitle = ({ children }) => {
    return (
        <div>
            <h3 className='text-base font-sans mb-10'>{children}</h3>
        </div>
    )
}

const ContentSection = ({ children }) => {
    return (
        <div>
            <p className='text-lg font-sans m-1 mt-4 sm:text-xl'>{children}</p>
        </div>
    )
}

const ContentSectionTitle = ({ children, id }) => {
    return (
        <div>
            <h2 id={id} className='text-3xl font-bold font-sans m-1 mt-4'>{children}</h2>
        </div>
    )
}

module.exports = {
    Content,
    ContentTitle,
    ContentSubTitle,
    ContentSection,
    ContentSectionTitle
}