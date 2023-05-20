import KButton from "../KButton";

import styles from "../../index.css"

export default function Home() {

    return (
        <div className="flex flex-col lg:flex-row w-screen h-full bg-orange-900">
            <div className="flex p-3 w-screen justify-center items-center flex-col gap-3 lg:w-6/12 lg:h-screen">
                <img src={require("../../images/logo.png")} className="rounded-lg h-36 w-36 lg:h-48 lg:w-48"/>
                <h1 className="text-2xl text-orange-200 lg:text-5xl">Hello, we are <b>πratzii</b>!</h1>
                <p  className="text-lg text-orange-300 w-4/5" >We are a group of programmers who joined forces by competing in different algorithm contests and hackathons. Our goal is to grow and spread our love for programming and light the path of those who can't seem to know where to go. We encourage everyone to join us and help us reach our goal and why not, have some fun?</p>
            </div>
            <div className="w-screen flex flex-col gap-0 lg:w-6/12 lg:h-screen">
                <div className="w-full flex flex-col gap-0 lg:flex-row lg:h-screen ">
                    <KButton title={"Team"} name = {"team"}
                             desc={"Team is a word that inspires us and make each and one of us better"}
                             color={"group flex items-center hover:from-sky-950 hover:to-sky-500  bg-gradient-to-br from-orange-950 to-orange-500 w-full lg:h-full h-60"}
                    />
                    <KButton title={"Join us"} name = {"join"}
                             desc={"Come with us in a great adventure and become a better programmer"}
                             color={"group flex items-center hover:from-sky-950 hover:to-sky-500 bg-gradient-to-br from-yellow-950 to-yellow-500 w-full lg:h-full h-60"}
                    />
                </div>
                <div  className="w-full flex flex-col gap-0 lg:flex-row lg:h-screen">
                    <KButton title={"Contests"} name = {"contest"}
                             desc={"Check out the 'battles' our team went through"}
                             color={"group flex items-center hover:from-sky-950 hover:to-sky-500 bg-gradient-to-br from-gray-950 to-gray-500 w-full lg:h-full h-60"}
                    />
                    <KButton title={"Projects"} name = {"projects"}
                             desc={"Look at our treasures"}
                             color={"group flex items-center hover:from-sky-950 hover:to-sky-500 bg-gradient-to-br from-red-950 to-red-500 w-full lg:h-full h-60"}
                    />
                </div>
            </div>
        </div>
    )
}
