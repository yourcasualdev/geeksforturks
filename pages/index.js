import Head from 'next/head'
import Footer from '../components/Footer'
import GoogleAds from '../components/GoogleAds'
import Header from '../components/Header'
import { CategoryShowCase } from '../components/MainSiteComponents'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Geeks For Turks</title>
        <meta name="description" content="Geeks for türks anasayfa" />
        <meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, Node.js, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"></meta>
        <link rel="icon" href="/favicon.ico" />
        <GoogleAds />
      </Head>
      <Header />
      <main>
        <CategoryShowCase title={"JavaScript Öğren"} color={"bg-yellow-300"} desc={"Dünyanın en çok kullanılan yazılım dilini öğren."} href={"/category/javascript/jsanasayfa"} hrefName={"JavaScript Anasayfa"} />
        <CategoryShowCase title={"Pyhton  Öğren"} color={"bg-blue-400"} desc={"Dünyanın en çok kullanılan yazılım dilini öğren."} href={"/category/javascript/jsanasayfa"} hrefName={"JavaScript Anasayfa"} />
      </main>
      <Footer />
    </div>
  )
}
