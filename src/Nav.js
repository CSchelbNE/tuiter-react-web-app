import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/a6">Assignment 6 </Link> |
            <Link to="/a7">Assignment 7</Link> |
            {/*Added the /home path to prevent crashing when useLocation() is called*/}
            <Link to="/tuiter/home">Tuiter</Link>
        </div>
    );
}

export default Nav;