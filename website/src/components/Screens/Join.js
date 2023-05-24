import Navbar from "../Navbar";
import OneProject from "../OneProject";
import {useEffect, useRef} from "react";

export default function Join() {

    const ref = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="h-full">
            <div className="flex items-center flex-col h-screen bg-gradient-to-br from-yellow-950 to-yellow-500 justify-center">
                <Navbar title={"Join us"}/>
                <div className="flex flex-col lg:flex-row w-3/5 h-fit gap-3 md:gap-0 lg:items-center">
                    <h1 className="block lg:hidden text-2xl text-orange-200 md:text-3xl font-bold">JOIN US</h1>
                    <div className="flex flex-col w-4/5 items-center gap-10 ">
                        <img src={require("../../images/join.png")} className="hidden lg:block group-hover:hidden h-20 w-20 lg:h-24 lg:w-24"/>
                        <p className="text-lg text-orange-300 md:w-4/5 ">
                            Our team is expanding day by day. So if you are interested in competitions and your
                            development in the IT field, join us.
                        </p>

                        <div className="flex flex-row gap-10">
                            <a target="#" href={"https://github.com/piratzii-tm"}><img src={require("../../images/github.png")} className="h-16 w-16 lg:h-20 lg:w-20"/></a>
                            <a target="#" href={"https://discord.gg/7bzyyafX"}><img src={require("../../images/discord.png")} className="h-16 w-16 lg:h-20 lg:w-20"/></a>
                        </div>

                    </div>
                    <h1 className="hidden lg:block lg:rotate-90 text-2xl text-orange-200 lg:text-3xl font-bold items-center">JOIN US</h1>
                </div>

            </div>
        </div>
    )
}