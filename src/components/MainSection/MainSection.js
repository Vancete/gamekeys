import './MainSection.scss'

export const MainSection = ({ title, icon, children, ...props }) => {
    return (
        <div className="main-section">
            <div className="title">
                {icon}
                {title}
            </div>
            <div className="content">{children}</div>
        </div>
    )
}
