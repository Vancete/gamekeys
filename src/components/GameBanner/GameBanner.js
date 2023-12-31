import { editFavGames } from '@/src/utils/utils'
import { CartIcon } from '../Icons/cart-icon'
import { HeartIcon } from '../Icons/heart-icon'
import './GameBanner.scss'

export const GameBanner = ({
    title,
    company,
    masthead,
    image,
    description,
    offers,
    rating,
    favs,
    setFavs,
    ...props
}) => {
    return (
        <div className="game-banner">
            <div className="game-bg" style={{ backgroundImage: `url(${masthead})` }}></div>
            <div className="game-info">
                <div className="content">
                    <div className="cover" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="title">
                        <h1>{title}</h1>
                        <h2>{company}</h2>
                    </div>
                    <div className="buy">
                        <CartIcon />
                        <label>{offers[0].price}</label>
                    </div>
                    <div className="fav" onClick={() => setFavs(editFavGames(favs, { title, image: masthead }))}>
                        <HeartIcon />
                    </div>
                </div>
            </div>
            <div className="game-description">
                <p>{description}</p>
                <div
                    className="score"
                    style={{ backgroundColor: rating > 74 ? '#16a34a' : rating > 49 ? '#eeab27' : '#da2525' }}
                >
                    {rating}
                </div>
            </div>
        </div>
    )
}
