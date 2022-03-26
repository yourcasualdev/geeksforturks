import Head from 'next/head'
import React from 'react'
import Header from '../../../components/Header'
import { ContentTitle, ContentSubTitle, ContentSection, ContentSectionTitle, Content } from '../../../components/ContentComponents'
import Navigation, { NavItem } from '../../../components/Navigation'
import Categories, { Category } from '../../../components/Categories'
import Code, { InlineCode } from '../../../components/Code'

const javascript = () => {
    return (
        <div>
            <Head>
                <title>Geeks For Turks</title>
                <meta name="description" content="Geeks for türks anasayfa" />
                <meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, Node.js, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Categories>
                <Category name='JS Anasayfa' to='jsanasayfa' />
                <Category name='JS Nereye Koyulur' to='jsnereye' />
                <Category name='JS Çıktı' to='jscıktı' />
            </Categories>
            <Content>
                <ContentTitle>JavaScript Anasayfa</ContentTitle>

                <ContentSectionTitle id="1">Neden JavaScript</ContentSectionTitle>
                <ContentSection>
                    JavaScript dünyanın en ünlü ve en çok kullanılan programlama dilidir. <br />
                    JavaScript' i öğrenmek kolaydır. <br />
                </ContentSection>
                <ContentSectionTitle id="2">JavaScript HTML içeriğini değiştirebilir.</ContentSectionTitle>
                <ContentSection>
                    Aşağıdaki örnekte <InlineCode>getElementById()</InlineCode> methodu ile <InlineCode>id="deneme"</InlineCode> adlı elementin içeriği değiştiriliyor. <br />

                    <Code lang={"javascript"}>
                        document.getElementById("deneme").innerHTML = "Hello World!";
                    </Code>
                </ContentSection>
                <ContentSectionTitle id="3">JavaScript HTML elementlerinin stilini değiştirebilir.</ContentSectionTitle>
                <ContentSection>
                    <Code>
                        document.getElementById("deneme").style.color = "red";
                    </Code>
                </ContentSection>
                <ContentSectionTitle id="4">JavaScript HTML elementlerinin görünürlüğünü değiştirebilir.</ContentSectionTitle>
                <ContentSection>
                    <Code>
                        document.getElementById("deneme").style.display = "hidden";
                    </Code>
                    Tekrar görünür yapmak için <InlineCode>style.display = "block"</InlineCode> yazılır.
                </ContentSection>

            </Content>
            <Navigation>
                <NavItem to='#1'>Neden JavaScript</NavItem>
                <NavItem to='#2'>JavaScript HTML içeriğini değiştirebilir</NavItem>
                <NavItem to='#3'>JavaScript HTML elementlerinin stilini değiştirebilir.</NavItem>
                <NavItem to='#4'>Javascript HTML elementlerinin görünürlüğünü değiştirebilir.</NavItem>
            </Navigation>
        </div>

    )
}

export default javascript