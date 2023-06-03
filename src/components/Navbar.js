import {Link} from "react-router-dom";

export default function Navbar({title,bg}){
    return(
        <div className="absolute top-0 w-full p-2 flex flex-row items-center">
            <Link to={"/"}><img src={require("../images/logo.png")} className="h-20 w-20 lg:h-24 lg:w-24 rounded-lg"/></Link>
        </div>
    )
}