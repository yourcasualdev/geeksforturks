import Link from "next/link"


const HeaderCategories = () => {
    const categories = [
        { name: 'python', title: 'Python' },
        { name: 'javascript/jsanasayfa', title: 'Javascript' },
        { name: 'react', title: 'React' },
        { name: 'node', title: 'Node' },
        { name: 'mongodb', title: 'MongoDB' },
        { name: 'express', title: 'Express' },
        { name: 'html', title: 'HTML' },
        { name: 'css', title: 'CSS' },
        { name: 'bootstrap', title: 'Bootstrap' },
        { name: 'sass', title: 'Sass' },
        { name: 'git', title: 'Git' },
        { name: 'github', title: 'Github' },
        { name: 'heroku', title: 'Heroku' },
    ]

    return (
        <nav className='w-full overflow-hidden bg-green-800'>
            {
                categories.map(category => {
                    return (
                        <Link href={`/category/${category.name}`} key={category.name}>
                            <a className=' text-slate-200 hover:text-slate-900 text-xl p-6'>{category.title}</a>
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default HeaderCategories