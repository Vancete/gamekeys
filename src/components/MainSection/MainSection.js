import { TitleBubble } from '../TitleBubble/TitleBubble'
import './MainSection.scss'

export const MainSection = ({ title, icon, children, ...props }) => {
    return (
        <div className="main-section">
            {title && <TitleBubble title={title} icon={icon} />}
            <div className="content">{children}</div>
        </div>
    )
}
