import './GameCard.scss'

export const GameCard = ({ title, image, ...props }) => {
    return (
        <div className="game-card">
            <div className="image">
                <div className="image-url" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="info">
                <label alt={title}>{title}</label>
            </div>
        </div>
    )
}
