import Footer from '../components/Footer'
import Header from '../components/Header'
import { CategoryShowCase } from '../components/MainSiteComponents'
import Main from '../context/context'
import PageHead from "../components/PageHead"


export default function Home() {
  return (
    <Main>
      <PageHead>
        <title>Geeks For Turks Anasayfa</title>
        <meta name="description" content="Türk yazılımcılar için türkce kaynak." />
        <meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, Nasıl Yapılır, PHP, Java, C, C++, C#, jQuery, Bootstrap, Renkler, W3.CSS, XML, MySQL, Icons, Node.js, React, Graphics, Angular, R, AI, Git, Data Science, Kurslar, Eğitimler, Programlama, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website, Örnekler, Websitesi"></meta>
        <link rel="canonical" href="https://geeksforturks.com" />
      </PageHead>
      <Header />
      <main>
        <CategoryShowCase title={"JavaScript Öğren"} color={"bg-yellow-300"} desc={"Dünyanın en çok kullanılan yazılım dilini öğren."} href={"/category/javascript/jshome"} hrefName={"JavaScript Anasayfa"} />
        <CategoryShowCase title={"Pyhton  Öğren"} color={"bg-blue-400"} desc={"Dünyanın en çok kullanılan yazılım dilini öğren."} href={"/category/javascript/jshome"} hrefName={"JavaScript Anasayfa"} />
      </main>
      <Footer />
    </Main>
  )
}
