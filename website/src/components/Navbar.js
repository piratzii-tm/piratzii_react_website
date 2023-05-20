import {Link} from "react-router-dom";

export default function Navbar({title,bg}){
    return(
        <div className="absolute top-0 w-full p-2 flex flex-row items-center">
            <Link to={"/"}><img src={require("../images/logo.png")} className="h-14 w-14 lg:h-20 lg:w-20 rounded-lg"/></Link>
        </div>
    )
}