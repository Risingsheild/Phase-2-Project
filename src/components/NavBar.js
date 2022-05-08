import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="navBar">
            <NavLink to="/" className="links" exact> HOME </NavLink>
            <NavLink to="/dc" className="links" exact>DC Movies</NavLink>
            <NavLink to="/watched" className="links" exact> Watched Movies</NavLink>
            <NavLink to="/marvel" className="links" exact>Marvel Movies</NavLink>
        </div>
    )
}

export default NavBar