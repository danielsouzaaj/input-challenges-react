import { Link } from 'react-router-dom'
import '../assets/css/project.css'
import icon from '../assets/images/arrow-up-right-from-square-solid.svg'

function Project({ title, link, preview }) {
    return (
        <article className="card">
            <img src={preview} alt="preview" />
            <h2 className="card-title">{title}</h2>
            <Link to={link}>
                <span className="link-container">
                    <p>Demo</p>
                    <img src={icon} alt="Demo link icon" />
                </span>
            </Link>
        </article>
    )
}

export default Project