import { Header } from '@/src/components/Header/Header'
import { MainBanner } from '@/src/components/MainBanner/MainBanner'
import { GameCard } from '@/src/components/GameCard/GameCard'
import { MainSection } from '@/src/components/MainSection/MainSection'
import { StarIcon } from '@/src/components/Icons/star-icon'
import { SparkIcon } from '@/src/components/Icons/spark-icon'
import { PiggyIcon } from '@/src/components/Icons/piggy-icon'
import { Footer } from '@/src/components/Footer/Footer'

export default function Home() {
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

    const newReleases = [
        { title: 'EA Sports FC 24', image: 'https://img.opencritic.com/game/15502/iNkrGzWj.jpg', price: 41 },
        { title: 'PAYDAY 3', image: 'https://img.opencritic.com/game/15193/7YkKQkrv.jpg', price: 24 },
        { title: "Baldur's Gate 3", image: 'https://img.opencritic.com/game/9136/fSYYsAEj.jpg', price: 23 },
        { title: 'Mortal Kombat 1', image: 'https://img.opencritic.com/game/15004/cvWZR3x8.jpg', price: 44 },
        {
            title: 'The Crew Motorfest',
            image: 'https://img.opencritic.com/game/undefined/biqKehZj.jpg',
            price: 52,
        },
    ]

    const freeGames = [
        {
            title: 'Counter-Strike: Global Offensive',
            image: 'https://img.opencritic.com/game/9752/9qn8Uvpc.jpg',
            price: 0,
        },
        {
            title: "PlayerUnknown's Battlegrounds",
            image: 'https://img.opencritic.com/game/4829/taRGZmej.jpg',
            price: 0,
        },
        { title: 'Lost Ark', image: 'https://img.opencritic.com/game/12680/5S1IkRnD.jpg', price: 0 },
        { title: 'Apex Legends', image: 'https://img.opencritic.com/game/7267/7VUb0Gj6.jpg', price: 0 },
        {
            title: 'War Thunder',
            image: 'https://img.opencritic.com/game/249/PGKHiS1K.jpg',
            price: 0,
        },
    ]

    return (
        <>
            <Header />
            <MainBanner />
            <main className="main-page">
                <MainSection title="Most popular" icon={<StarIcon />}>
                    {newReleases.slice(0, 3).map((item) => (
                        <GameCard key={item.title} title={item.title} image={item.image} price={item.price} />
                    ))}
                </MainSection>
                <MainSection>
                    {popularGames.map((item) => (
                        <GameCard key={item.title} title={item.title} image={item.image} price={item.price} />
                    ))}
                </MainSection>
                <MainSection title="New releases" icon={<SparkIcon />}>
                    {newReleases.map((item) => (
                        <GameCard key={item.title} title={item.title} image={item.image} price={item.price} />
                    ))}
                </MainSection>
                <MainSection title="Free to play" icon={<PiggyIcon />}>
                    {freeGames.map((item) => (
                        <GameCard key={item.title} title={item.title} image={item.image} price={item.price} />
                    ))}
                </MainSection>
            </main>
            <Footer />
        </>
    )
}
