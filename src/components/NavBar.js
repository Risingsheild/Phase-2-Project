import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/" exact> HOME </NavLink>
            <NavLink to="/dc" exact>DC Movies</NavLink>
            <NavLink to="/watched"> Watched Movies</NavLink>
            <NavLink to="/marvel">Marvel Movies</NavLink>
        </div>
    )
}

export default NavBar