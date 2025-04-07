import React from "react";
import pg from "../assets/PG.jfif"
import ug from "../assets/UG.jfif"
import school from "../assets/School.jfif"

const Education = () => {

    return (
        
        <section id="education">
         <div>
            <p style={{color: "#E34234"}}>2022-2024</p>
            <p>Master of Computer Application</p>
            <img src={pg} alt="postgraducate"></img>
            <p>Vels Institute Of Science and Technology and Advanced Studies</p>
            <p>CGPA: 77%</p>
         </div>
         
         <div>
            <p style={{color: "#E34234"}}>2019-2022</p>
            <p>Bachelor of Commerce and Computer Application</p>
            <img src={ug} alt="undergraducate"></img>
            <p>Thiruthangal Nadar College</p>
            <p>CGPA: 75%</p>
         </div>

         <div>
            <p style={{color: "#E34234"}}>2018-2019</p>
            <p>Commerce and Computer Application</p>
            <img src={school} alt="higher"></img>
            <p>St.Anns's Matriculation Higher Secondary School</p>
            <p>50%</p>
         </div>

         <div>
            <p style={{color: "#E34234"}}>2016-2017</p>
            <img src={school} alt="secondary"></img>
            <p>St.Ann's Matriculation Higher Secondary School</p>
            <p>76%</p>
         </div>
        
        </section>
        
    )
}

export default Education;