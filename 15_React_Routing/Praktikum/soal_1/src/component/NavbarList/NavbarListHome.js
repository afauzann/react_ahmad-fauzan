import { Link } from "react-router-dom"

function NavbarListHome () {

    return (
        <div className="navbar-list-home">
            <li >
            <Link to="/" 
                style={{ textDecoration: 'none', 
                color: 'aquamarine'}}>
                    Home
            </Link>
            </li>
            <li >
                <Link to="/about" 
                    style={{ textDecoration: 'none', 
                    color: 'aquamarine'}}>
                        About
                </Link>
            </li>
        </div> 
    )
}

export default NavbarListHome