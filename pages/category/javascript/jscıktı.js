import Head from 'next/head'
import React from 'react'
import Header from '../../../components/Header'
import { ContentTitle, ContentSubTitle, ContentSection, ContentSectionTitle, Content, Break } from '../../../components/ContentComponents'
import Navigation, { NavItem } from '../../../components/Navigation'
import Categories, { Category } from '../../../components/Categories'
import Code, { InlineCode } from '../../../components/Code'

const javascript = () => {
    return (
        <div className=''>
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
            <div className='flex'>
                <Content>
                    <ContentTitle id="1">JavaScript Nereye Koyulur ?</ContentTitle>

                    <ContentSectionTitle>&lt;script&gt; Tagı</ContentSectionTitle>
                    <ContentSection>
                        HTMl dosyalanımızda <InlineCode>&lt;script&gt;</InlineCode> taglarının arasında javascript kodu yazabiliriz. <Break />
                        <Code>
                            {`
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Document</title>
                            </head>
                            <body>
                                <script>
                                    console.log('Hello World');
                                </script>
                            </body>
                            </html>
                            `}
                        </Code>
                    </ContentSection>

                    <ContentSectionTitle id="2">Ayrı bir dosyada tutmak.</ContentSectionTitle>
                    <ContentSection>
                        Javascripti <InlineCode>.js</InlineCode> uzantılı dosyalara kaydedebiliriz. <Break />
                        Bu şekilde kaydettiğimiz javascript'i <InlineCode>src</InlineCode> tagında çağırabiliriz. <Break />
                        <Code>
                            {`
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Document</title>
                                <script src="./main.js"></script>
                            </head>
                            <body>
                            </body>
                            </html>
                            `}
                        </Code>
                        Burdaki <InlineCode>./</InlineCode> bulunduğumuz dizin anlamına geliyor. <Break />
                    </ContentSection>

                    <ContentSectionTitle id="3">&lt;body&gt; etiketine mi yoksa &lt;head&gt; etiketine mi koymalı ?</ContentSectionTitle>
                    <ContentSection>
                        JavaScript sayfanın diğer kaynakları arasında yüklenmesi en uzun sürendir. <Break />
                        Bu yüzden ayfanın ilk çiziminin gecikmemesi için javascript' i <strong>en son</strong> yükleriz. <Break />
                        Bunu sağlamanın iki yolu vardır. <Break />
                    </ContentSection>
                    <ContentSectionTitle id="4">#1 Sayfanın sonunda yüklemek</ContentSectionTitle>
                    <ContentSection>
                        &lt;body&gt; tagının sonuna ekleyerek sayfamızın sonunda javascript'i yükleyebiliriz. <Break />
                        <Code>
                            {`
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Document</title>
                            </head>
                            <body>
                                <script src="js/main.js"></script>
                            </body>
                            </html>
                            `}
                        </Code>
                    </ContentSection>
                    <ContentSectionTitle id="5">#2 defer etiketi</ContentSectionTitle>
                    <ContentSection>
                        Sayfanın neresine koyulduğu fark etmeksizin javascript'i sayfamızı yavaşlatmadan eklemenin bir yolu <InlineCode>defer</InlineCode>  etiketidir. <Break />
                        <InlineCode>defer</InlineCode> etiketi javascript'i arkaplanda yükleyerek sayfanın yavaş açılmasını engeller. <Break />
                        <Code>
                            {`
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Document</title>
                                <script defer src="js/main.js"></script>
                            </head>
                            <body>
                            </body>
                            </html>
                            `}
                        </Code>
                    </ContentSection>
                </Content>
                <Navigation>
                    <NavItem to='#1'>Script tagı.</NavItem>
                    <NavItem to='#2'>Ayrı bir dosyada tutmak.</NavItem>
                    <NavItem to='#3'>Body mi Head mi ?</NavItem>
                    <NavItem to='#4'>Sayfanın sonunda yüklemek.</NavItem>
                    <NavItem to='#5'>Defer etiketi.</NavItem>
                </Navigation>
            </div>

        </div>
    )
}

export default javascript