import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Geeks For Turks</title>
        <meta name="description" content="Geeks for türks anasayfa" />
        <meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, Node.js, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='items-center'>
        <h1>Geeks for Turks ANASAYFA</h1>
      </main>

    </div>
  )
}
