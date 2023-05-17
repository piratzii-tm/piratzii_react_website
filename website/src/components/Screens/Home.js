import {useState} from "react";
import KButton from "../KButton";

import styles from "../../index.css"

export default function Home() {

    const [screen, setScreen] = useState("home")

    return (
        <div className="flex flex-col md:flex-row w-screen h-screen bg-orange-900">
            <div className="h-1/2 w-screen md:w-6/12 md:h-screen">
                <h1>Hello, we are πratzii!</h1>
            </div>
            <div className="h-1/2 w-screen flex flex-col gap-3 md:w-6/12 md:h-screen">
                <div className="w-full h-1/2 flex flex-col gap-3 md:flex-row md:h-screen ">
                    <KButton title={"Team"} name = {"team"} setScreen={setScreen}/>
                    <KButton title={"Join us"} name = {"join"} setScreen={setScreen}/>
                </div>
                <div  className="w-full h-1/2 flex flex-col gap-3 md:flex-row md:h-screen">
                    <KButton title={"Contests"} name = {"contest"} setScreen={setScreen}/>
                    <KButton title={"Projects"} name = {"projects"} setScreen={setScreen}/>
                </div>
            </div>
        </div>
    )
}
