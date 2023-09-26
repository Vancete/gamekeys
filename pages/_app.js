import { useEffect, useState } from 'react'
import './globals.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Game Keys',
    description: 'Generated by create next app',
}

export default function MyApp({ Component, pageProps }) {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        const favGames = JSON.parse(localStorage.getItem('favGames'))

        setFavs(favGames)
    }, [])

    return <Component favs={favs} setFavs={setFavs} {...pageProps} />
}
