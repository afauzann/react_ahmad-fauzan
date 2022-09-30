import { Link } from "react-router-dom";
import "./NotFound.css"

function NotFound() {
    return (
        <div className="notfound">
            <h1 className="title-404">404</h1>
			<h1>Page Not Found</h1>
            <div className="link">
                <Link to="/"
            style={{ textDecoration: 'none', color: 'white'}}>
                Back to home
            </Link>
            </div>
			
		</div>
    )
}

export default NotFound