import Link from 'next/link'
import { DeleteRound } from '../Icons/delete-round'
import './WishItem.scss'
import { cleanFileName, editFavGames } from '@/src/utils/utils'

const WishItem = ({ game }) => {

    const {title, image} = game

  return (
    <li>
        <Link href={`/games/${cleanFileName(title)}`} className='game-data'>
            <img src={image} alt={title}  />
            <span>{title}</span>
        </Link>
        <div className='delete'>
            <DeleteRound />
        </div>
    </li>
  )
}

export default WishItem