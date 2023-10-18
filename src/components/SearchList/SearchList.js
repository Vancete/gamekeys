import { useEffect, useState } from 'react'
import './SearchList.scss'
import { SearchItem } from '../SearchItem/SearchItem'

export const SearchList = ({ searchText }) => {

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        fetch("search-data.json")
        .then(res => res.json())
        .then(data => {
            const foundGames = data.filter(game => game.name.toLowerCase().includes(searchText.toLowerCase())) 
            setSearchResult(foundGames)
        })
        
    }, [searchText])

  return (
    <ul className="search-list">
        {(searchResult.length > 0) 
            ? (searchResult.map(game => {
                return <SearchItem key={game.name} {...game} />
            }))
            :
            (<li className='empty-list'>No game found</li>)
        }
    </ul>
  )
}
