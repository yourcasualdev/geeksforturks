import React from 'react'
import Head from 'next/head'
import GoogleAds from './GoogleAds'

const PageHead = ({ children }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <GoogleAds />
            {children}
        </Head>
    )
}

export default PageHead