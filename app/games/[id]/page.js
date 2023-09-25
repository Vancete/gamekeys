import { Footer } from '@/src/components/Footer/Footer'
import { GameBanner } from '@/src/components/GameBanner/GameBanner'
import { Header } from '@/src/components/Header/Header'

export default function Page({ params }) {
    const id = params.id
    const gameData = require(`../../../data/${id}.json`).data
    const offers = require(`../../../data/${id}.json`).offers
    const sortedOffers = offers.sort((a, b) => a.price - b.price)

    const title = gameData.name
    const { publisher, author } = gameData
    const company = (author && author[0].name) || (publisher && publisher[0].name) || [{ name: 'Unknown' }]
    const mainImage = gameData.image
    const mastheadImage = gameData.screenshot.filter((item) => item.caption.toLowerCase().indexOf('masthead') > -1)[0]
        .contentUrl
    const description = gameData.description
    const rating = gameData.aggregateRating.ratingValue

    return (
        <>
            <Header />
            <GameBanner
                title={title}
                company={company}
                masthead={mastheadImage}
                image={mainImage}
                description={description}
                offers={sortedOffers}
                rating={rating}
            />
            <main></main>
            <Footer />
        </>
    )
}
