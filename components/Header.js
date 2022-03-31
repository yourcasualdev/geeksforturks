
import Link from "next/link"
import { useState, useEffect } from "react"
import { useContext } from "react"
import { MainContext } from "../context/context"

const HeaderCategories = () => {
  const categories = [
    { name: 'python', title: 'Python' },
    { name: 'javascript/jshome', title: 'Javascript' },
    { name: 'react', title: 'React' },
    { name: 'node', title: 'Node' },
    { name: 'mongodb', title: 'MongoDB' },
    { name: 'express', title: 'Express' },
    { name: 'html', title: 'HTML' },
    { name: 'css', title: 'CSS' },
    { name: 'bootstrap', title: 'Bootstrap' },
    { name: 'sass', title: 'Sass' },
    { name: 'git', title: 'Git' },
    { name: 'github', title: 'Github' },
    { name: 'heroku', title: 'Heroku' },
  ]

  return (
    <nav className='w-full overflow-hidden bg-green-800'>
      {
        categories.map(category => {
          return (
            <Link href={`/category/${category.name}`} key={category.name}>
              <a className=' text-slate-200 hover:text-slate-900 text-xl p-6'>{category.title}</a>
            </Link>
          )
        })
      }
    </nav>
  )
}

const Header = () => {
  const { changeIsHidden } = useContext(MainContext)
  const [isRoot, setIsroot] = useState(false)

  useEffect(() => {
    const URL = window.location.href
    setIsroot(URL === 'https://www.geeksforturks.com' || URL === 'https://geeksforturks.com' || URL === 'http://localhost:3000/')
  }, [])



  return (
    <>
      <header className="sticky w-full top-0 shadow-lg">
        <div className={`bg-black ${!isRoot ? "flex" : ""} space-x-10   text-white w-full h-20 items-center text-center p-5 lg:block`}>
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