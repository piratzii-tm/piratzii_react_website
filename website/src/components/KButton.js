import {Link} from "react-router-dom";
import {useState} from "react";

export default function KButton({title,name,setScreen}) {

    const [route, setRoute] = useState("/"+name)

    return (
        <Link className="bg-orange-600 w-full h-full" to={route}>
            <h1>{title}</h1>
        </Link>
    )
}