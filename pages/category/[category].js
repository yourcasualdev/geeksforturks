import Head from "next/head"
import AsideCategories from "../../components/AsideCategories"
import Header from "../../components/Header"
import { useRouter } from "next/router"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

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

const pages = [
  { name: "jshome", title: "jıfennnnnnnnnnnnnnnnnnnnnnnnnnnnndfaıdjnsıdvn<ısugnva<ıusfvgnaısgnv" },
]

const TEST_MARKDOWN = "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n"

const CodeHighlight = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={atomOneDark}>
      {value}
    </SyntaxHighlighter>
  )
}

const javascript = () => {
  const router = useRouter()
  const { category } = router.query

  const [subcategory, setSubcategory] = useState(subcategories[0].name)
  console.log(subcategory)

  return (
    <div className="bg-blue-100">
      <Head>
        <title>Geeks For Turks {category}</title>
        <meta name="description" content="Geeks for türks anasayfa" />
        <meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, Node.js, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid place-items-center h-screen overflow-hidden">
        <div className="grid grid-cols-10 gap-6 m-5 container">
          <div className="px-4 col-span-2 h-screen top-0">
            {subcategories.map(subcategory => {
              return (
                <div className="p-1 m-1 bg-slate-400">
                  <h3 className="text-2xl">{subcategory.title}</h3>
                </div>
              )
            })}
          </div>
          <div className="mx-auto grid px-4 bg-green-600 col-span-6 w-11/12">
            <ReactMarkdown children={TEST_MARKDOWN} components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }} />
          </div>
          <div className="mx-auto grid px-4 bg-green-600 col-span-2 w-11/12">
          </div>
        </div>
      </div>
    </div>
  )
}




export default javascript