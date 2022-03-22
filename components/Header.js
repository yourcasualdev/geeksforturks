import HeaderCategories from "./HeaderCategories"
const Header = () => {
  return (
    <header>
        <div className=' bg-black text-slate-300 w-full h-20 items-center text-center p-5'>
            <h1 className='font-bold text-3xl '>Geeks for Turks</h1>
        </div>
        <HeaderCategories/>
    </header>
  )
}

export default Header