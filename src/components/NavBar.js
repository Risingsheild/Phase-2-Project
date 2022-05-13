import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="navBar">
            <NavLink to="/" className="links" > HOME </NavLink>
            <NavLink to="/dc" className="links" >DC Movies</NavLink>
            <NavLink to="/watched" className="links" > Watched Movies</NavLink>
            <NavLink to="/marvel" className="links" >Marvel Movies</NavLink>
        </div>
    )
}

export default NavBar