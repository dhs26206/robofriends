import React from "react";
import Card from "./Card";

const CardList=({robots})=>{
    return(
       <>
       {
        robots.map((user,i) => {
            return(
                <>
                <Card key={user} name={robots[i]} />
                </>
            )
        })
       }
       </>
    );
}
export default CardList;