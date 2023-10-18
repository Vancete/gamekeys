import { useEffect, useState } from 'react'
import Fuse from 'fuse.js'

import './SearchList.scss'
import { SearchItem } from '../SearchItem/SearchItem'

export const SearchList = ({ searchText, searchList }) => {
    const [searchResult, setSearchResult] = useState([])

    const fuseOptions = {
        keys: ['name'],
    }

    const fuse = new Fuse(searchList, fuseOptions)

    useEffect(() => {
        const foundGames = fuse.search(searchText)
        setSearchResult(foundGames)
    }, [searchText])

    return (
        <ul className="search-list">
            {searchResult.length > 0 ? (
                searchResult.map((game) => {
                    return <SearchItem key={game.item.name} {...game.item} />
                })
            ) : (
                <li className="empty-list">No game found</li>
            )}
        </ul>
    )
}
