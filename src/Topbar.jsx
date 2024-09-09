import { Component } from "react";

class header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className="  mb-20 flex items-center justify-between py-.3 text-3xl text-cyan-700">
            <a  className=" flex flex-shrink-0 items-center"> My Portfolio</a>
            
            <nav className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a> 
            <a href="#contact">Contact</a>
            </nav>
        </header>
        )
    }
}
export default header;