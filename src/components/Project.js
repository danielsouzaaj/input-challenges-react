import '../assets/project.css'

function Project({title, tags}) {
    return (
        <article className="card">
            <h2 className="card-title">{title}</h2>
            <div className="tag-container">
                {tags.map(tag => (<span>{tag}</span>))}
            </div>
        </article>
    )
}

export default Project