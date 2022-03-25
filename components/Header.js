import HeaderCategories from "./HeaderCategories"
import Link from "next/link"
import { useState, useEffect } from "react"
const Header = () => {

  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }
        console.log(document.body.scrollTop)
        return isShrunk;
      });
    };

    document.addEventListener("scroll", handler);
  }, []);



  return (
    <header className="sticky top-0 shadow-lg">
      <div className='bg-black text-white w-full h-20 items-center text-center p-5'>
        <h1 className='font-bold text-3xl'><Link href={"/"}>Geeks for Turks</Link></h1>
      </div>
      <HeaderCategories />
    </header>
  )
}

export default Header