import { useState } from 'react'

import './Header.scss'

import { SearchIcon } from '../Icons/search-icon'
import { HeartIcon } from '../Icons/heart-icon'
import Image from 'next/image'
import Link from 'next/link'
import { TitleBubble } from '../TitleBubble/TitleBubble'
import { StarIcon } from '../Icons/star-icon'
import { SparkIcon } from '../Icons/spark-icon'
import { PiggyIcon } from '../Icons/piggy-icon'
import WishList from '../WishList/Wishlist'

export const Header = ({favs}) => {

    const [showWishList, setShowWishList] = useState(false)

    return (
        <header>
            <div className="header-main">
                <Link href="/">
                    <Image
                        className="gamekeys-logo"
                        src="/gamekeys-logo.svg"
                        alt="gamekeys-logo"
                        width={200}
                        height={42}
                    />
                </Link>
                <form className="search">
                    <SearchIcon className="search-icon" />
                    <input type="text" placeholder="Buscar"></input>
                </form>
                <div className="header-actions">
                    <div className="action" onClick={() => setShowWishList(!showWishList)}>
                        <HeartIcon className="wishlist-icon" />
                        <label>Wish list</label>
                    </div>
                </div>
            </div>
            <div className="header-menu">
                <TitleBubble icon={<StarIcon />} title="Most popular" />
                <TitleBubble icon={<SparkIcon />} title="New releases" />
                <TitleBubble icon={<PiggyIcon />} title="Free to play" />
                {showWishList && <WishList favs={favs} />}
            </div>
        </header>
    )
}
