import React,{Component} from "react";
// import Card from "./Card";
import Search from "../Components/Search";
import {robots} from "../Components/robots";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll"
class App extends Component{
    
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    onchange=(event)=>{
        console.log(event.target.value);
        this.setState({searchfield:event.target.value});
    }
    render(){
        const filteredrobots=this.state.robots.filter(robots=>{
            return robots.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <>
            <Search searchchange={this.onchange} />
            <Scroll>
            <CardList robots={filteredrobots} /> 
            </Scroll>  
            </>
        )       
    }
}
export default App;