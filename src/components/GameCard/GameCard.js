import './GameCard.scss'

export const GameCard = ({ title, image, price, ...props }) => {
    return (
        <div className="game-card">
            <div className="image">
                <div className="image-url" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="info">
                <label alt={title}>{title}</label>
                <label className={`price ${price === 0 ? 'free' : ''}`}>{price === 0 ? 'FREE' : price}</label>
            </div>
        </div>
    )
}
