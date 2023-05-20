import Navbar from "../Navbar";

export default function Team() {

    return (
        <div className="h-full max:h-fit">
            <Navbar title={"Team"}/>
            <div className="flex items-center flex-col h-screen w-full justify-center bg-gradient-to-br from-orange-950 to-orange-500 gap-2">
                <h1 className="text-orange-200 text-5xl font-serif">Captains</h1>
                <div className="flex items-center justify-evenly flex-col lg:flex-row w-4/5">
                    <a target="#" href={"https://www.linkedin.com/in/iulian-pop-0585bb245/"}
                       className="group flex flex-col h-1/2 w-1/2 lg:h-full lg:w-full items-center justify-center gap-3">

                        <img src={require("../../images/IulianPop.jfif")} className="block group-hover:hidden h-1/2 rounded-full border-4 border-orange-200"/>
                        <img src={require("../../images/LinkedIn.png")} className="hidden group-hover:block h-1/2 rounded-full border-4 border-orange-200"/>
                        <h1 className="text-orange-200 text-2xl lg:text-3xl">Iulian Pop</h1>
                    </a>

                    <a target="#" href={"https://www.linkedin.com/in/iulian-poenaru-00bb7215a/"}
                       className="group flex flex-col h-1/2 w-1/2 lg:h-full lg:w-full items-center justify-center gap-3">

                        <img src={require("../../images/IulianPoenaru.jfif")} className="block group-hover:hidden h-1/2 rounded-full border-4 border-orange-200"/>
                        <img src={require("../../images/LinkedIn.png")} className="hidden group-hover:block h-1/2 rounded-full border-4 border-orange-200"/>
                        <h1 className="text-orange-200 text-2xl lg:text-3xl">Iulian Poenaru</h1>
                    </a>

                    <a target="#" href={"https://www.linkedin.com/in/raț-ioan-paul-b09269172/"}
                       className="group flex flex-col h-1/2 w-1/2 lg:h-full lg:w-full items-center justify-center gap-3">

                        <img src={require("../../images/Paul.jfif")} className="block group-hover:hidden h-1/2 rounded-full border-4 border-orange-200"/>
                        <img src={require("../../images/LinkedIn.png")} className="hidden group-hover:block h-1/2 rounded-full border-4 border-orange-200"/>
                        <h1 className="text-orange-200 text-2xl lg:text-3xl">Ioan-Paul Rat</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}