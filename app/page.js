import { Header } from '@/src/components/Header/Header'
import { MainBanner } from '@/src/components/MainBanner/MainBanner'
import { GameCard } from '@/src/components/GameCard/GameCard'
import { MainSection } from '@/src/components/MainSection/MainSection'
import { StarIcon } from '@/src/components/Icons/star-icon'

export default function Home() {
    const popularGames = [
        { title: 'Starfield', image: 'https://img.opencritic.com/game/14907/YGJBcWFc.jpg' },
        { title: 'Cyberpunk 2077', image: 'https://img.opencritic.com/game/8525/E6Fgdch4.jpg' },
        { title: 'Lies of P', image: 'https://img.opencritic.com/game/15437/WfcS2Ver.jpg' },
        { title: 'Sea of Stars', image: 'https://img.opencritic.com/game/15003/cfvJYxOD.jpg' },
        {
            title: 'The Legend of Zelda: Tears of the Kingdom',
            image: 'https://img.opencritic.com/game/14343/5f92uzHj.jpg',
        },
    ]

    return (
        <>
            <Header />
            <MainBanner />
            <main>
                <MainSection title="Most popular" icon={<StarIcon />}>
                    {popularGames.map((item) => (
                        <GameCard key={item.title} title={item.title} image={item.image} />
                    ))}
                </MainSection>
            </main>
        </>
    )
}
