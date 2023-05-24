import {Link} from "react-router-dom";
import OneContest from "../OneContest";
import Spacer from "../Spacer";
import {useEffect} from "react";

export default function Contests() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    return (
        <div className="h-full max:h-fit flex flex-row gap-3 bg-gradient-to-br from-gray-950 to-gray-500 justify-center">

            <div className="hidden lg:block mt-16 w-1/4">
                <OneContest clsCont={"rounded-l-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"HackTM 2023"}
                            image={"hacktm.jpeg"}
                            imgCls={"lg:w-28 lg:h-28 rounded-lg"}
                />
                <Spacer height={"h-96"}/>
                <OneContest clsCont={"rounded-l-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"iTFest 2022"}
                            image={"skull.png"}
                            imgCls={"lg:w-24 lg:h-24 rounded-lg"}/>
                <Spacer height={"h-40"}/>
                <OneContest clsCont={"rounded-l-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"Unihack 2022"}
                            image={"unihack2022.jpg"}
                            imgCls={"lg:w-28 lg:h-28 rounded-lg"}/>
            </div>
            <div className="flex items-center flex-col min:h-screen max:h-fit mt-2">
                <Link to={"/"}><img src={require("../../images/logo.png")} className="h-20 w-20 lg:h-32 lg:w-32 rounded-lg"/></Link>
                <div className="min-h-screen max-h-fit">
                    <img src={require("../../images/rope.png")} className="w-32 h-64"/>
                    <img src={require("../../images/rope.png")} className="w-32 h-64"/>
                    <img src={require("../../images/rope.png")} className="w-32 h-64"/>
                    <img src={require("../../images/rope.png")} className="w-32 h-64"/>
                    <img src={require("../../images/rope.png")} className="w-32 h-64"/>
                    <img src={require("../../images/rope.png")} className="hidden lg:block w-32 h-64"/>
                    <img src={require("../../images/rope.png")} className="hidden lg:block w-32 h-64"/>
                </div>
            </div>
            <div className="hidden lg:block mt-16 w-1/4">
                <Spacer height={"h-40"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"iTec 2023"}
                            image={"itec.jpeg"}
                            imgCls={"lg:w-28 lg:h-28 rounded-lg"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"CCC #37 2023"}
                            image={"ccc37.jpg"}
                            imgCls={"lg:w-32 lg:h-28 rounded-lg"}/>
                <Spacer height={"h-40"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"CCC #36 2022"}
                            image={"ccc36.jpg"}
                            imgCls={"lg:w-28 lg:h-28 rounded-lg"}/>
                <Spacer height={"h-40"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"CISM 2022"}
                            image={"skull.png"}
                            imgCls={"lg:w-24 lg:h-24 rounded-lg"}/>
            </div>

            <div className="block lg:hidden w-2/4">
                <OneContest clsCont={"rounded-r-lg lg:rounded-l-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"HackTM 2023"}
                            image={"hacktm.jpeg"}
                            imgCls={"hidden lg:block lg:w-28 lg:h-28 rounded-lg"}/>
                <OneContest clsCont={"rounded-r-lg lg:rounded-l-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"iTFest 2022"}
                            image={"skull.png"}
                            imgCls={"hidden lg:block lg:w-24 lg:h-24 rounded-lg"}/>
                <OneContest clsCont={"rounded-r-lg lg:rounded-l-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"Unihack 2022"}
                            image={"unihack2022.jpg"}
                            imgCls={"hidden lg:block lg:w-28 lg:h-28 rounded-lg"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"iTec 2023"}
                            image={"itec.jpeg"}
                            imgCls={"hidden lg:block lg:w-28 lg:h-28 rounded-lg"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"CCC #37 2023"}
                            image={"ccc37.jpg"}
                            imgCls={"hidden lg:block lg:w-32 lg:h-28 rounded-lg"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"CCC #36 2022"}
                            image={"ccc36.jpg"}
                            imgCls={"hidden lg:block lg:w-28 lg:h-28 rounded-lg"}/>
                <OneContest clsCont={"rounded-r-lg p-5 lg:w-full bg-zinc-900 flex flex-row gap-1 justify-evenly items-center"}
                            title={"CISM 2022"}
                            image={"skull.png"}
                            imgCls={"hidden lg:block lg:w-24 lg:h-24 rounded-lg"}/>
            </div>

        </div>
    )
}