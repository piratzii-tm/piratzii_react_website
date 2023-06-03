import {useState} from "react";

export default function OneContest({clsCont,title,image,imgCls}){

    const [isOpen, setIsOpen] = useState(false)

    const handleShowDialog = () => {
        setIsOpen( !isOpen );
        console.log('cliked');
    };

    return (
        <div className="pt-24">
            {isOpen && (
                <dialog
                    className="dialog"
                    style={{ position: 'absolute' }}
                    open
                    onClick={()=>handleShowDialog()}
                >
                    <img
                        className="h-96 w-96"
                        src={require("../images/"+image)}
                        onClick={()=>handleShowDialog()}
                        alt="no image"
                    />
                </dialog>
            )}
            <div className={clsCont}>
                <h1 className="text-2xl text-gray-50 md:text-2xl font-bold">{title}</h1>
                <img src={require("../images/"+image)} className={imgCls} onClick={()=>handleShowDialog()}/>
            </div>
        </div>
    )
}