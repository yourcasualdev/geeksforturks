import React from 'react'
import Header from '../../../components/Header'
import { ContentTitle, ContentSubTitle, ContentSection, ContentSectionTitle, Content, Break } from '../../../components/ContentComponents'
import Navigation, { NavItem } from '../../../components/Navigation'
import { JsCategories } from '../../../components/Categories'
import Code, { InlineCode } from '../../../components/Code'
import Footer from '../../../components/Footer'
import Main from '../../../context/context'
import PageHead from '../../../components/PageHead'

const javascript = () => {
    return (
        <Main>
            <PageHead>
                <title>Geeks For Turks</title>
                <meta name="description" content="Geeks for türks anasayfa" />
                <meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, Node.js, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"></meta>
            </PageHead>
            <Header />
            <JsCategories />
            <Content>
                <ContentTitle id="1">JavaScript Çıktı Görme</ContentTitle>

                <ContentSectionTitle>JavaScript nerelere çıktı verebilir ?</ContentSectionTitle>
                <ContentSection>
                    JavaScriptten veri çıkışı almanın bir çok yolu vardır.
                    <Break />
                    <InlineCode>console.log()</InlineCode> fonksiyonu ile çıktı alabiliriz.
                    <Break />
                    <InlineCode>alert()</InlineCode> fonksiyonu ile çıktı alabiliriz.
                    <Break />
                    <InlineCode>document.write()</InlineCode> fonksiyonu ile çıktı alabiliriz.
                    <Break />
                    <InlineCode>document.getElementById()</InlineCode> fonksiyonu ile çıktı alabiliriz.
                    <Break />

                </ContentSection>

                <ContentSectionTitle id="2">Console.log() ile çıktı almak</ContentSectionTitle>
                <ContentSection>
                    <InlineCode>console.log()</InlineCode> fonksiyonu ile çıktı alabiliriz.
                    <Break />
                    <InlineCode>index.js</InlineCode> adında bir dosya oluşturup, aşağıdaki kodu yazıyoruz.
                    <Code>
                        {`console.log("Merhaba Dünya");`}
                    </Code>
                    <Break />
                    Tarayıcınızda sayfanızı açtığınızda F12 tuşuna basarak konsolu açtığınızda <InlineCode>Merhaba Dünya</InlineCode> yazısını görürsünüz.
                </ContentSection>

                <ContentSectionTitle id="3">Alert() fonksiyonu ile çıktı almak</ContentSectionTitle>
                <ContentSection>
                    <InlineCode>alert()</InlineCode> fonksiyonu ile çıktı alabiliriz.
                    <Break />
                    <InlineCode>index.js</InlineCode> adında bir dosya oluşturup, aşağıdaki kodu yazıyoruz.
                    <Code>
                        {`alert("Merhaba Dünya");`}
                    </Code>
                    <Break />
                    Sayfayı açtığımız anda Merhaba Dünya yazısını içeren bir bilgilendirme kutucuğu açılacaktır.
                    Aşağıdaki butona tıklayarak deneyebilirsin.
                    <div className='m-5'>
                        <button className="w-fit p-2 h-10 inline-block bg-red-700" onClick={() => alert("Bana bastın!")}>Bana bas!</button>
                    </div>
                    Bu butonu yapmayı daha sonra öğreneceğiz.
                </ContentSection>
                <ContentSectionTitle id="4">document.write() ile çıktı almak.</ContentSectionTitle>
                <ContentSection>
                    <InlineCode>document.write()</InlineCode> fonksiyonu ile çıktı alabiliriz.
                    <Break />
                    <InlineCode>index.js</InlineCode> adında bir dosya oluşturup, aşağıdaki kodu yazıyoruz.
                    <Code>
                        {`document.write("Merhaba Dünya");`}
                    </Code>
                    <Break />
                    Bu kodu çalıştırdığımızda bütün html kodu silinip <InlineCode>Merhaba Dünya</InlineCode> içerisine yazılacaktır.
                    <Break />
                    <strong>document.write() komutu sadece test amaçlı kullanılmalıdır!</strong>
                </ContentSection>
                <ContentSectionTitle id="5">HTML dosyasının içine yazmak</ContentSectionTitle>
                <ContentSection>
                    <InlineCode>index.html</InlineCode> adında bir dosya oluşturup, aşağıdaki kodu yazıyoruz.
                    <Code>
                        {`
<!DOCTYPE html>
<html lang="en">
<head>
document.getElementById("merhaba").innerHTML = "Merhaba Dünya";
</head>
<body>
<h1 id="merhaba">Benim içimdeki yazı değişicek.</h1>
</body>
</html>
                            `}
                    </Code>
                </ContentSection>
            </Content>
            <Navigation />
            <Footer />
        </Main>
    )
}

export default javascript