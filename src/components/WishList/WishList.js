import './WishList.scss'

import WishItem from '../WishItem/WishItem'
import { SadIcon } from '../Icons/sad-icon'

const WishList = ({ favs, setFavs, showWishList }) => {
    return (
        <div className={`wishlist ${showWishList ? 'show' : ''}`}>
            {favs.length < 1 ? (
                <div className="empty">
                    <SadIcon />
                    <p>Your wish list is empty</p>
                </div>
            ) : (
                <ul>
                    {favs.map((game) => (
                        <WishItem key={game.title} game={game} favs={favs} setFavs={setFavs} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default WishList
