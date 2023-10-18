import Link from "next/link"
import "./SearchItem.scss"
import { cleanFileName } from "@/src/utils/utils";

export const SearchItem = ({name, image}) => {

    console.log(name);
  return (
    <Link href={`/games/${cleanFileName(name)}`} className="search-item">
        <li className="game-data">
            <img src={image} alt={name} />
            <span>{name}</span>       
        </li>  
    </Link>
  )
}
