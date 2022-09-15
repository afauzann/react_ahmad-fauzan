import './assets/style.css'

function Content({user}) {
    return (
    <div>
        <ul>
            <li style={{ textDecoration: user.completed ? "line-through" : "" }}>{user.title}</li>
        </ul>
    </div>
    )
}

export default Content;