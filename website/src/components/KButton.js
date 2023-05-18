import {Link} from "react-router-dom";
import {useState} from "react";

export default function KButton({title,name,desc,color}) {

    const [route, setRoute] = useState("/"+name)
    console.log(color)
    return (
        <Link className={color} to={route}>
            <div className="flex w-full h-full flex gap-3 items-center justify-center flex-col">
                <img src={require("../images/"+name+".png")} alt={name} className="block group-hover:hidden h-14 w-14 md:h-24 md:w-24"/>
                <img src={require("../images/coin.gif")} className="hidden group-hover:block h-14 w-14 md:h-24 md:w-24"/>
                <div className="pl-4 flex w-full md:items-start flex-col">
                    <h1 className="text-2xl text-orange-200 group-hover:text-sky-200 md:text-5xl font-bold">{title}</h1>
                    <p className="text-lg text-orange-300 group-hover:text-sky-300 w-4/5">{desc}</p>
                </div>
                <p className="text-lg text-sky-950 hidden group-hover:block">Find out more...</p>
            </div>
        </Link>
    )
}