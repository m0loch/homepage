import { Link } from "react-router-dom";

import img from '../images/logo.jpg';
import '../css/navbar.css';

function NavBar() {
    return (
        <div className="navbar">
            <Link className="logo" to="/homepage">
                    <img src={img} alt="logo"></img>
            </Link>

            <nav>
                <Link className='link' to="/homepage">Home</Link>
                <Link className='link' to="/about">About</Link>
            </nav>
        </div>
    );
}

export default NavBar;