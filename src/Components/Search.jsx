import React from 'react';
import "./Search.css"
import "animate.css"
const Search=({searchchange})=>{
    return(
        <>
        <h1 className='text-6xl my-5 animate_animated animate__bounceIn'>RoboFriends</h1>
        <input className='w-full mb-4 mx-[40rem] p-2 rounded-lg min-w-[200px] ' onChange={searchchange} type="search" name="" id="" placeholder='Search'/>
        <div className='w-full   border-b-2 border-black'></div>
        </>
    )
}
export default Search;