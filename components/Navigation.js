import React, {useState, useEffect} from 'react'

const Navigation = ({ children }) => {
    const [navitems, setNavitems] = useState([])

    useEffect(() => {
        //find all a that have an id = anchor
        const anchors = document.querySelectorAll('h2[class ~= "anchor"]')
        const navitems = []
        anchors.forEach((anchor, index) => {
            const id = index
            const text = anchor.innerText
            const offset = anchor.offsetTop
            navitems.push({id, text, offset})
        }
        )
        setNavitems(navitems)
    }, [])

    const anchorScroll = (offset) => {
        window.scrollTo({
            top: offset - 150,
            behavior: 'smooth'
        })
    }

    return (
        <aside className='hidden py-10 bg-slate-50 w-[14rem] h-fit  top-[6.8125rem] px-8 overflow-y-auto  xl:block m-3 fixed z-20 right-[max(0px,calc(50%-50rem))]'>
            <h2 className='p-1 m-1 mb-4 text-xl font-bold'>Bu sayfadakiler</h2>
            {navitems.map(navitem => (
                <a onClick={()=>{anchorScroll(navitem.offset)}} className='block p-1 m-1 text-base font-sans cursor-pointer hover:text-green-500' key={navitem.id}>{navitem.text}</a>
            ))}
        </aside>
    )
}

const NavItem = ({href,title}) => {
    return (
        <div className='w-full p-2'>
            <a className='font-thin text-lg text-black hover:text-green-600' href={href}>{title}</a>
        </div>
    )
}

export default Navigation
export { NavItem }
