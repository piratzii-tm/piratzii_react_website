export default function OneProject({title,description,link}){
    return (
        <div className="p-10">
            <div className="rounded-md p-5 md:w-96 bg-amber-900 flex flex-col gap-1">
                <h1 className="text-2xl text-orange-200 md:text-2xl font-bold">{title}</h1>
                <p className="text-lg text-orange-300">{description}</p>
                <p className="text-lg text-orange-300 font-bold">Available at: </p>
                <li className="list-none">
                    <a target="#" href={link}><img src={require("../images/github.png")} className="h-7 w-7"/></a>
                </li>

            </div>
        </div>
    )
}