import Head from "next/head"
import AsideCategories from "../../components/AsideCategories"
import Header from "../../components/Header"
import { useRouter } from "next/router"
import { useState } from "react"

const subcategories = [
  { name: "jshome", title: "Javascript Home" },
  { name: "jsIntroduction", title: "Javascript Introduction" },
  { name: "jsBasics", title: "Javascript Basics" },
  { name: "jsFunctions", title: "Javascript Functions" },
  { name: "jsObjects", title: "Javascript Objects" },
  { name: "jsArrays", title: "Javascript Arrays" },
  { name: "jsStrings", title: "Javascript Strings" },
  { name: "jsNumbers", title: "Javascript Numbers" },
  { name: "jsBooleans", title: "Javascript Booleans" },
  { name: "jsNull", title: "Javascript Null" },
  { name: "jsUndefined", title: "Javascript Undefined" },
  { name: "jsSyntax", title: "Javascript Syntax" },
  { name: "jsConditionals", title: "Javascript Conditionals" },
  { name: "jsLoops", title: "Javascript Loops" },
]


const javascript = () => {
  const router = useRouter()
  const { category } = router.query

  const [subcategory, setSubcategory] = useState(subcategories[0].name)
  return (
    <div className="bg-blue-100">
      <Head>
        <title>Geeks For Turks {category}</title>
        <meta name="description" content="Geeks for türks anasayfa" />
        <meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, Node.js, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="">
        <div className="grid grid-cols-10 gap-6 m-5 ">
          <div className="container mx-auto px-4 bg-purple-500 col-span-2 h-screen top-0">
            {subcategories.map(subcategory => {
              return (
                <a className="text-white text-xl p-6 hover:text-white">{subcategory.title}</a>

              )
            })}
          </div>
          <div className="container mx-auto px-4 bg-green-600 col-span-8">
            deneme
          </div>
        </div>
      </div>
    </div>
  )
}

export default javascript