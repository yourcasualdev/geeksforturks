import Head from 'next/head'
import React from 'react'
import Header from '../../../components/Header'
import { ContentTitle, ContentSubTitle, ContentSection, ContentSectionTitle, Content } from '../../../components/ContentComponents'
import Navigation, { NavItem } from '../../../components/Navigation'
import Categories, { Category } from '../../../components/Categories'

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
                <Category name='JS Home' to='jshome' />
                <Category name='JS Introduction' to='jsIntroduction' />
                <Category name='node' to='Node' />
                <Category name='mongodb' to='MongoDB' />
                <Category name='express' to='Express' />
                <Category name='html' to='HTML' />
            </Categories>
            <div className='flex'>
                <Content>
                    <ContentTitle>JavaScript Introduction</ContentTitle>
                    <ContentSubTitle>
                        This page contains some examples of what JavaScript can do.
                    </ContentSubTitle>

                    <ContentSectionTitle>JavaScript Can Change HTML Content</ContentSectionTitle>
                    <ContentSection>
                        In programming, data types is an important concept.

                        To be able to operate on variables, it is important to know something about the type.

                        Without data types, a computer cannot safely solve this:
                    </ContentSection>
                    <ContentSectionTitle>İlk başlık</ContentSectionTitle>
                    <ContentSection>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        lorem100
                    </ContentSection>
                    <ContentSectionTitle id="hayat">Hayat</ContentSectionTitle>
                    <ContentSection>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ContentSection>
                    <ContentSectionTitle>İlk başlık</ContentSectionTitle>
                    <ContentSection>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        lorem100
                    </ContentSection>

                </Content>
                <Navigation>
                    <NavItem to='#hayat'>hayat</NavItem>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/'>Home</NavItem>
                </Navigation>
            </div>

        </div>
    )
}

export default javascript