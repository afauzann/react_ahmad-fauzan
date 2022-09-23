import { Link } from "react-router-dom"

function NavbarListAbout () {

    return (
        <div className="navbar-list-about">
            <li >
            <Link to="/" 
                style={{ textDecoration: 'none', 
                color: 'black'}}>
                    Home
            </Link>
            </li>
            <li >
                <Link to="/about/about-app" 
                    style={{ textDecoration: 'none', 
                    color: 'black'}}>
                        About App
                </Link>
            </li>
            <li >
                <Link to="/about/about-author" 
                    style={{ textDecoration: 'none', 
                    color: 'black'}}>
                        About Author
                </Link>
            </li>
        </div> 
    )
}

export default NavbarListAbout