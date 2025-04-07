import React from "react"
import '../App.css'

import { Link } from "react-router-dom"

const Header = () =>{


    return (
      
         <section id="heading" > 
         
          <div className="name">NAVINKUMAR</div>
           <Link to = '/' className="head-link">IDENTITY</Link>
           <Link to = '/Experience' className="head-link">EXPERIENCE</Link>
           <Link to = '/Contact' className="head-link">CONTACT</Link> 
           <Link to= '/Education' className="head-link">EDUCATION</Link>
        
          </section>
    )
}

export default Header



































/* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
} */
