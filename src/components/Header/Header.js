import { useState, useEffect } from 'react'

import './Header.scss'

import { SearchIcon } from '../Icons/search-icon'
import { HeartIcon } from '../Icons/heart-icon'
import Image from 'next/image'
import Link from 'next/link'
import { TitleBubble } from '../TitleBubble/TitleBubble'
import { StarIcon } from '../Icons/star-icon'
import { SparkIcon } from '../Icons/spark-icon'
import { PiggyIcon } from '../Icons/piggy-icon'
import { RemoveIcon } from '../Icons/remove-icon'
import WishList from '../WishList/WishList'
import { SearchList } from '../SearchList/SearchList'

export const Header = ({ favs, setFavs }) => {
    const [showWishList, setShowWishList] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [searchList, setSearchList] = useState([])

    useEffect(() => {
        fetch('/search-data.json')
            .then((res) => res.json())
            .then((data) => {
                setSearchList(data)
            })
    }, [])

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const resetText = () => {
        setSearchText('')
    }

    return (
        <header>
            <div className="header-main">
                <Link href="/">
                    <Image
                        className="keysgod-logo"
                        src="/gamekeys-logo.svg"
                        alt="KEYSGOD logo"
                        width={200}
                        height={42}
                    />
                </Link>
                <form className="search">
                    <SearchIcon className="search-icon" />
                    <input type="text" placeholder="Search" onChange={handleChange} value={searchText} />
                    {searchText !== '' && (
                        <>
                            <RemoveIcon className="remove-icon" onClick={resetText} />
                            <SearchList searchText={searchText} searchList={searchList} />
                        </>
                    )}
                </form>
                <div className="header-actions">
                    <div className="action" onClick={() => setShowWishList(!showWishList)}>
                        <HeartIcon className={`wishlist-icon ${showWishList ? 'open' : ''}`} />
                        <label>Wish list</label>
                    </div>
                </div>
            </div>
            <div className="header-menu">
                <TitleBubble icon={<StarIcon />} title="Most popular" />
                <TitleBubble icon={<SparkIcon />} title="New releases" />
                <TitleBubble icon={<PiggyIcon />} title="Free to play" />
                <WishList favs={favs} setFavs={setFavs} showWishList={showWishList} />
            </div>
        </header>
    )
}
