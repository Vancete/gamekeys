import { Footer } from '@/src/components/Footer/Footer'
import { GameBanner } from '@/src/components/GameBanner/GameBanner'
import { Header } from '@/src/components/Header/Header'

export default function Page({ params }) {
    const id = params.id
    const gameData = require(`../../../data/${id}.json`).data

    const title = gameData.name
    const { publisher, author } = gameData
    const company = (author && author[0].name) || (publisher && publisher[0].name) || [{ name: 'Unknown' }]
    const mainImage = gameData.image
    const mastheadImage = gameData.screenshot.filter((item) => item.caption.toLowerCase().indexOf('masthead') > -1)[0]
        .contentUrl
    const description = gameData.description

    return (
        <>
            <Header />
            <GameBanner
                title={title}
                company={company}
                masthead={mastheadImage}
                image={mainImage}
                description={description}
            />
            <main></main>
            <Footer />
        </>
    )
}
