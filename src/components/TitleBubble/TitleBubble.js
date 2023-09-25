import Link from 'next/link'
import './TitleBubble.scss'

export const TitleBubble = ({ title, icon, href, ...props }) => {
    return (
        <Link className="title-bubble" href={href || ''}>
            {icon}
            {title}
        </Link>
    )
}
