import Link from 'next/link'
import { DeleteRound } from '../Icons/delete-round'
import './WishItem.scss'
import { cleanFileName, editFavGames } from '@/src/utils/utils'

const WishItem = ({ game, favs, setFavs }) => {

    const {title, image} = game

  return (
    <li>
        <Link href={`/games/${cleanFileName(title)}`} className='game-data'>
            <img src={image} alt={title}  />
            <span>{title}</span>
        </Link>
        <div className='delete' onClick={() => setFavs(editFavGames(favs, game))}>
            <DeleteRound />
        </div>
    </li>
  )
}

export default WishItem