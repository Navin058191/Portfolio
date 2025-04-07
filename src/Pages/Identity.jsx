import React from "react";
import mypic from "../assets/Navin.jpg"
import { FaLinkedin } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrResume } from "react-icons/gr";

const  Identity = () => {

  return (
    <>
    <section className="identity">
      <h1 style={{fontSize:"50px"}}>Hello</h1>
      <h2 style={{fontSize:"60px"}}>I'm NavinKumar</h2>
      <h3 style={{fontSize:"60px", paddingBottom:"30px"}}>Web Developer</h3>
       <div id="picture">
       <img src={mypic} alt="photo"  className="picture"/>
       </div>
      <h1 style={{fontSize:"30px", paddingBottom: "15px"}}>Looking For Job To gain My Identity, <br></br> In the Way of 
        finding New Skills and Experience <br></br> under the 
        guidance of Expert.
      </h1>
      <ul className="icons">
        <li> <FaLinkedin /> </li>
        <li><SiIndeed /> </li>
        <li><FaGithub /></li>
        <li><GrResume /></li>
        <button className="resume">C V</button>
      </ul>
    </section>
    </>
  )
}

export default Identity