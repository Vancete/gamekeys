import { CartIcon } from '../Icons/cart-icon'
import './GameOffer.scss'

export const GameOffer = ({ offer, ...props }) => {
    return (
        <div className="game-offer">
            <label className="shop">{offer.name}</label>
            <div className="buy">
                <CartIcon />
                <label>{offer.price}</label>
            </div>
        </div>
    )
}
