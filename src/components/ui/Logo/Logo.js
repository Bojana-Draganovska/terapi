// React
import { Link } from "react-router-dom";

function Logo() {
    return (
       <Link to={"/"}><img src="/assets/icons/logo.svg"></img></Link>
    )
}

export default Logo;