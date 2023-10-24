import { Routes, Route, Link} from 'react-router-dom';

function NavBar () {
    return (
        <div>
        <nav className="navbar"> 
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/post">Post</Link>
            </nav>
        </div>
    )
}

export default NavBar