
import Link from "next/link"
import { useState, useEffect } from "react"
import { useContext } from "react"
import { MainContext } from "../context/context"

const HeaderCategories = () => {
  return (
    <nav className='w-full overflow-x-auto overflow-y-hidden bg-green-800 sm:overflow-x-hidden'>
      <HeaderCategory href="python" title="Python" disabled />
      <HeaderCategory href="javascript/jshome" title="JavaScript" />
      <HeaderCategory href="react" title="React" disabled />
      <HeaderCategory href="node" title="Node" disabled />
      <HeaderCategory href="mongodb" title="MongoDB" disabled />
      <HeaderCategory href="express" title="Express" disabled />
      <HeaderCategory href="html" title="Html" disabled />
      <HeaderCategory href="css" title="Css" disabled />
      <HeaderCategory href="bootstrap" title="Bootstrap" disabled />
      <HeaderCategory href="sass" title="Sass" disabled />
      <HeaderCategory href="github" title="Github" disabled />
      <HeaderCategory href="heroku" title="Heroku" disabled />
    </nav>
  )
}

const HeaderCategory = ({ href, title, disabled }) => {
  return (
    !disabled ?
      <Link href={`/category/${href}`} key={href}>
        <a className=' text-slate-200 hover:text-slate-900 text-xl p-6'>{title}</a>
      </Link>
      :
      <a className=' text-slate-500 text-xl p-6 hover:cursor-not-allowed'>{title}</a>
  )
}

const Header = () => {
  const { changeIsHidden } = useContext(MainContext)
  const [isRoot, setIsroot] = useState(false)

  useEffect(() => {
    const URL = window.location.href
    setIsroot(URL === 'https://www.geeksforturks.com/' || URL === 'https://geeksforturks.com/' || URL === 'http://localhost:3000/')
  }, [])



  return (
    <>
      <header className=" w-full top-0 shadow-lg sm:sticky">
        <div className={`bg-black ${!isRoot ? "flex" : ""} space-x-10 text-white w-full items-center text-center p-5 lg:block`}>
          <HiddenButton changeHidden={changeIsHidden} isRoot={isRoot} />
          <h1 className='font-bold text-3xl'><Link href={"/"}>Geeks for Turks</Link></h1>
        </div>
        <HeaderCategories />
      </header>

    </>
  )
}

const HiddenButton = ({ changeHidden, isRoot }) => {

  return (
    <div className={`flex ${isRoot ? "hidden" : ""} justify-center lg:hidden`}>
      <a
        onClick={() => { changeHidden ? changeHidden() : null }}
        className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
      >
        <svg
          className="fill-current h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </a>
    </div>
  )
}


export default Header