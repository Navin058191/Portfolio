import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Identity from "./Pages/Identity";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";

const App = () => {

  return (                     
   <Router>
     <Header/>
     <Routes>
        <Route path = "/" element = {<Identity/>}></Route>
        <Route path = "/Experience" element = {<Experience/>}></Route>
        <Route path = "/Contact" element = {<Contact/>}></Route>
        <Route path= "/Education" element ={<Education/>}></Route>
     </Routes>
   </Router>
  )
}

export default App
