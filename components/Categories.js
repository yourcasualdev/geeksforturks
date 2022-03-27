import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { MainContext } from '../context/context'

const Categories = ({ children }) => {
    const { ishidden } = useContext(MainContext)
    return (
        <aside className={`${ishidden ? "hidden" : ""} pt-5 bg-slate-50 ml-3 lg:block fixed z-20 inset-0 top-[7.8125rem] left-[max(0px,calc(50%-52rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto h-full max-h-[42.8rem]`}>
            <h2 className='p-1 m-1 mb-4 text-xl font-bold'>Kategoriler</h2>
            {children}
        </aside>
    )
}

const Category = ({ name, to }) => {
    return (
        <div className='w-full p-5 border-b-2'>
            <Link href={to}>
                <a className=''>{name}</a>
            </Link>
        </div>
    )
}

const JsCategories = () => {
    return (
        <Categories>
            <Category name='JS Anasayfa' to='jshome' />
            <Category name='JS Nereye Koyulur' to='jswhereto' />
            <Category name='JS Çıktı' to='jsoutput' />
            <Category name='JS Yorumlar' to='jscomments' />
            <Category name='JS Değişgenler' to='jsvariables' />
            <Category name='JS Let' to='jslet' />
            <Category name='JS Const' to='jsconst' />
            <Category name='JS Operatörler' to='jsoperators' />
            <Category name='JS Aritmetik' to='jsarithmetic' />
            <Category name='JS Atama' to='jsassignment' />
            <Category name='JS Veri Çeşitleri' to='jsdatatypes' />
            <Category name='JS Fonksiyonlar' to='jsfunctions' />
            <Category name='JS Objeler' to='jsobjects' />
            <Category name='JS Eventler' to='jsevents' />
            <Category name='JS Strings' to='jsstrings' />
            <Category name='JS String Methodları' to='jsstringmethods' />
            <Category name='JS String Arama' to='jsstringsearch' />
            <Category name='JS String Templateleri' to='jsstringtemplates' />
            <Category name='JS Sayılar' to='jsnumbers' />
            <Category name='JS Sayı Methodları' to='jsnumbermethods' />
            <Category name='JS Diziler' to='jsarrays' />
            <Category name='JS Dizi Methodları' to='jsarraymethods' />
            <Category name='JS Dizi Sıralama' to='jsarraysort' />
            <Category name='JS Dizi İçinde Gezme' to='jsarrayiteration' />
            <Category name='JS Kalıcı Diziler' to='jsarrayconst' />
            <Category name='JS Tarihler' to='jsdates' />
            <Category name='JS Tarih Formatları' to='jsdateformats' />
            <Category name='JS Tarih Alma Methotları' to='jsdategetmethods' />
            <Category name='JS Tarih Yazma Methotları' to='jsdatesetmethods' />
            <Category name='JS Matematik' to='jsmath' />
            <Category name='JS Rastgele' to='jsrandom' />
            <Category name='JS Booleanlar' to='jsbooleans' />
            <Category name='JS Karşılaştırma' to='jscomparisons' />
            <Category name='JS Kondisyonlar' to='jsconditions' />
            <Category name='JS Switch Methodu' to='jsswitch' />
            <Category name='JS Loop For' to='jsloopfor' />
            <Category name='JS Loop In' to='jsloopforin' />
            <Category name='JS Loop Out' to='jsloopforof' />
            <Category name='JS Loop While' to='jsloopwhile' />
            <Category name='JS Break' to='jsbreak' />
            <Category name='JS İterablelar' to='jsiterables' />
            <Category name='JS Setler' to='jssets' />
            <Category name='JS Mapler' to='jsmaps' />
            <Category name='JS TypeOf' to='jstypeof' />
            <Category name='JS Veri Karşılaştırması' to='jstypeconversion' />
            <Category name='JS BitWise' to='jsbitwise' />
            <Category name='JS RegeX' to='jsregexp' />
            <Category name='JS Hatalar' to='jserrors' />
            <Category name='JS Değişgen Erişilebilirliği' to='jsscope' />
            <Category name='JS Hoisting' to='jshoisting' />
            <Category name='JS "Strict" modu' to='jsstrictmode' />
            <Category name='JS this anahtar kelimesi' to='jsthiskeyword' />
            <Category name='JS arrow fonksiyonlar' to='jsarrowfunction' />
            <Category name='JS Objeler' to='jsclasses' />
            <Category name='JS Moduller' to='jsmodules' />
            <Category name='JS JSON' to='jsjson' />
            <Category name='JS Hata Ayıklama' to='jsdebugging' />
            <Category name='JS Stil' to='jsstyleguide' />
            <Category name='JS Hatalar' to='jsmistakes' />
            <Category name='JS Performans' to='jsperformance' />
            <Category name='JS Ayrılmış Anahtar Kelimeler' to='jsreservedkeywords' />
        </Categories>
    )
}

export default Categories
export { Category, JsCategories }