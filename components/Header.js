import headerStyles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div>
            <h1>
                <span className={headerStyles.title}>
                    WebDev News
                </span> 
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with the latest web dev news
            </p>
        </div>
    )
}