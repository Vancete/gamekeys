import Image from 'next/image'
import './Header.scss'

import { SearchIcon } from '../Icons/search-icon'
import { HeartIcon } from '../Icons/heart-icon'

export const Header = () => {
    return (
        <header>
            <div className="header-main">
                <Image className="gamekeys-logo" src="/gamekeys-logo.svg" alt="gamekeys-logo" width={200} height={42} />
                <form className="search">
                    <SearchIcon className="search-icon" />
                    <input type="text" placeholder="Buscar"></input>
                </form>
                <div className="header-actions">
                    <div className="action">
                        <HeartIcon className="wishlist-icon" />
                        <label>Wish list</label>
                    </div>
                </div>
            </div>
            <div className="header-menu"></div>
        </header>
    )
}
