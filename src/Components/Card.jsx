import React from "react";
import 'animate.css'
const Card=({name}) => {
    return(
        <div className="m-8 w-[250px] bg-green-900 rounded-lg h-[300px] text-center ">
            <img className="h-4/5 border-b-2 border-black w-auto" alt={`${name}`} src={`https://robohash.org/${name}.png`}  />
            <h2 className="animate_animated animate__bounceIn text-yellow-300">{name}</h2>
            <p className="text-white">{name}@outlook.in </p>
        </div>
    );
}
export default Card;
