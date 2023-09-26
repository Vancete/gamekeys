import { useRouter } from 'next/router'
import './page.scss'

import { Footer } from '@/src/components/Footer/Footer'
import { GameBanner } from '@/src/components/GameBanner/GameBanner'
import { GameCard } from '@/src/components/GameCard/GameCard'
import { GameOffer } from '@/src/components/GameOffer/GameOffer'
import { Header } from '@/src/components/Header/Header'
import { StarIcon } from '@/src/components/Icons/star-icon'
import { MainSection } from '@/src/components/MainSection/MainSection'
import { useEffect, useState } from 'react'

export default function Page({ gameData, offers, ...props }) {
    const router = useRouter()
    const sortedOffers = offers.sort((a, b) => a.price - b.price)

    const title = gameData.name
    const { publisher, author } = gameData
    const company = (author && author[0].name) || (publisher && publisher[0].name) || [{ name: 'Unknown' }]
    const mainImage = gameData.image
    const mastheadImage = gameData.screenshot.filter((item) => item.caption.toLowerCase().indexOf('masthead') > -1)[0]
        .contentUrl
    const description = gameData.description
    const rating = gameData.aggregateRating.ratingValue

    const popularGames = [
        { title: 'Starfield', image: 'https://img.opencritic.com/game/14907/YGJBcWFc.jpg', price: 45 },
        {
            title: 'Cyberpunk 2077: Phantom Liberty',
            image: 'https://img.opencritic.com/game/15196/fkFeB1Fg.jpg',
            price: 27,
        },
        { title: 'Lies of P', image: 'https://img.opencritic.com/game/15437/WfcS2Ver.jpg', price: 40 },
        { title: 'Sea of Stars', image: 'https://img.opencritic.com/game/15003/cfvJYxOD.jpg', price: 16 },
        {
            title: 'The Legend of Zelda: Tears of the Kingdom',
            image: 'https://img.opencritic.com/game/14343/5f92uzHj.jpg',
            price: 49,
        },
    ]

    const [favs, setFavs] = useState([])

    useEffect(() => {
        const favGames = JSON.parse(localStorage.getItem('favGames'))

        setFavs(favGames)
    }, [])

    return (
        <>
            <Header favs={favs} />
            <GameBanner
                title={title}
                company={company}
                masthead={mastheadImage}
                image={mainImage}
                description={description}
                offers={sortedOffers}
                rating={rating}
                favs={favs}
                setFavs={setFavs}
            />
            <main>
                <div className="offers">
                    <h3>Best offers</h3>
                    {sortedOffers.map((offer, index) => (
                        <GameOffer key={index} offer={offer} />
                    ))}
                </div>
                <MainSection title="Most popular" icon={<StarIcon />}>
                    {popularGames.map((item) => (
                        <GameCard key={item.title} title={item.title} image={item.image} price={item.price} />
                    ))}
                </MainSection>
            </main>
            <Footer />
        </>
    )
}

export const getStaticPaths = async () => {
    const fs = require('node:fs')
    const gameList = fs.readdirSync('./data')

    return {
        paths: gameList.map((game) => ({
            params: {
                slug: game.split('.')[0],
            },
        })),
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const gameData = require(`../../data/${context.params.slug}.json`).data
    const offers = require(`../../data/${context.params.slug}.json`).offers
    return { props: { gameData, offers } }
}
