import {useEffect, useRef} from "react";
import Navbar from "../Navbar";
import OneProject from "../OneProject";

export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="h-full max:h-fit bg-gradient-to-br from-red-950 to-red-500">
            <div className="flex items-center flex-col  h-screen bg-gradient-to-br from-red-950 to-red-500 justify-center">
                <Navbar title={"Projects"}/>

                <div className="flex flex-col lg:flex-row w-4/5 h-fit gap-3 lg:gap-0 lg:items-center lg:justify-center">
                    <h1 className="block lg:hidden text-2xl text-orange-200 lg:text-3xl font-bold">P R 0 J E C T S</h1>
                    <div className="flex flex-col w-4/5 items-center gap-10">
                        <img src={require("../../images/projects.png")} className="hidden lg:block group-hover:hidden h-14 w-14 lg:h-24 lg:w-24"/>
                        <p className="text-lg text-orange-300 group-hover:text-sky-300 lg:w-4/5">Below you will find mobile apps and web apps developed by our team in various contest and more. Through these projects we aim to evolve as a team and as programmers.</p>
                    </div>
                    <h1 className="hidden lg:block lg:rotate-90 text-2xl text-orange-200 lg:text-2xl font-bold">P R 0 J E C T S</h1>
                </div>


                <button onClick={handleClick} className="group absolute bottom-4">
                    <img src={require("../../images/mouse.png")} className="block group-hover:hidden h-12 w-12"/>
                    <img src={require("../../images/mouse_hover.png")} className="hidden group-hover:block h-12 w-12"/>

                </button>
            </div>
            <div ref={ref} className="flex flex-col w-full ms:h-screen bg-gradient-to-tr from-red-950 to-red-500">
                <div className="flex lg:flex-row flex-col w-full justify-evenly">
                    <OneProject title={"TimiTourist"} description={"TimiTourist este o aplicație care își dorește să introducă o metoda mai intercativă care să motiveze atât turștii cât si localnicii să cunoască Timișoara."} link={"https://github.com/piratzii-tm/iTec_2023"}/>
                    <OneProject title={"iCheck"} description={"Are you ready for a health checkup? Improve your life by checking all your cells. Upload & view medical records and receive notifications when is the time for a new health investigation."} link={"https://github.com/piratzii-tm/HackTM_2023"}/>
                    <OneProject title={"I'm here"} description={"Because making sure that everyone at the course is there is hard we brought you \"I'm here\". A React Native application that combines social fun with the attendace list."} link={"https://github.com/piratzii-tm/itfest_uvt_2022"}/>
                </div>
                <div className="flex lg:flex-row flex-col w-fit justify-evenly">
                    <OneProject title={"SocialCard"} description={"A project that is made by people for people. This project is a website that has the main goal of helping people digitalize their business cards aka share their socials easier."} link={"https://github.com/piratzii-tm/unihack2022"}/>
                    <OneProject title={"CodeTaping"} description={"This is a cookie clicker kind of game, where you \"Code\". Pressing the keyboard, you generate points, and get better and better at coding. As you get better, you go for harder programing languages, and slower to write"} link={"https://github.com/PopIulian88/CodeTaping"}/>
                </div>
            </div>
        </div>
    )
}