import React from "react";
const CardView = ({ children, backgroundColor }) => {
    return (
        <div className="flex flex-col items-center justify-between p-3 rounded-2xl h-[24rem] drop-shadow-lg hover:scale-125  duration-700 " style={{ background: backgroundColor }}>
            {children}
        </div>
    )
}

export default CardView;