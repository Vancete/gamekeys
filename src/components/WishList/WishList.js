import "./WishList.scss"

import WishItem from "../WishItem/WishItem"

const WishList = ({favs}) => {

  return (
    <div className="wishlist"> 
        { favs.length < 1 
            ? <p>The list is empty</p>
            : <ul>{ favs.map( game => <WishItem key={game.title} game={game} />)} </ul> 
        }
    </div>
  )
}

export default WishList