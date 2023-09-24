import { Header } from '@/src/components/Header/Header'
import { MainBanner } from '@/src/components/MainBanner/MainBanner'
import { GameCard } from '@/src/components/GameCard/GameCard'
import { MainSection } from '@/src/components/MainSection/MainSection'
import { StarIcon } from '@/src/components/Icons/star-icon'

export default function Home() {
    const popularGames = [
        { title: 'Starfield', image: 'https://img.opencritic.com/game/14907/YGJBcWFc.jpg', price: 45 },
        { title: 'Cyberpunk 2077', image: 'https://img.opencritic.com/game/8525/E6Fgdch4.jpg', price: 27 },
        { title: 'Lies of P', image: 'https://img.opencritic.com/game/15437/WfcS2Ver.jpg', price: 40 },
        { title: 'Sea of Stars', image: 'https://img.opencritic.com/game/15003/cfvJYxOD.jpg', price: 16 },
        {
            title: 'The Legend of Zelda: Tears of the Kingdom',
            image: 'https://img.opencritic.com/game/14343/5f92uzHj.jpg',
            price: 49
        },
    ]

    return (
        <>
            <Header />
            <MainBanner />
            <main>
                <MainSection title="Most popular" icon={<StarIcon />}>
                    {popularGames.map((item) => (
                        <GameCard key={item.title} title={item.title} image={item.image} price={item.price} />
                    ))}
                </MainSection>
            </main>
        </>
    )
}
