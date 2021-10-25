import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Where To Eat!</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/Jane">Jane's Picks</Link>
                <Link to="/Jesse">Jesse's Picks</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Submit A Restaurant</Link>
                
               
            </div>
            </nav>
    );
}
 
export default Navbar;