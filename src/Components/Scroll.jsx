import React from "react";

const Scroll=(props)=>{
    return(
    <div className="flex flex-wrap w-full justify-center" style={{overflow:'scroll',height:'600px'}} >
        {props.children}
    </div>
    );

}
export default Scroll;