import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Navbar (){
    return (
            <div style={{textAlign:"center", fontFamily:"cursive" , height:"100vh"}}>
                <br />
            <h1>System Test</h1> <br /> <br />
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
            <button><Link to="/">Home</Link></button>
        </li>
        <li className="nav-item">
            <button><Link to="/Que1">Que NO.1</Link></button>
        </li>
         <li className="nav-item">
         <button><Link to="/Que2">Que NO.2</Link> </button>
        </li> 
        <li className="nav-item">
        <button> <Link to="/Que3">Que NO.3</Link>  </button>
        </li> 
        <li className="nav-item">
        <button><Link to="/Que4">Que NO.4</Link> </button>
        </li> 
        <li className="nav-item">
        <button> <Link to="/Que5">Que NO.5</Link> </button>
        </li>
        <li className="nav-item">
        <button> <Link to="/Que6">Que NO.6</Link> </button>
        </li>
        <li className="nav-item">
        <button> <Link to="/Que7">Que NO.7</Link> </button>
        </li>
        <li className="nav-item">
        <button> <Link to="/Que8">Que NO.8</Link> </button>
        </li>
        <li className="nav-item">
        <button> <Link to="/Que9">Que NO.9</Link> </button>
        </li>
        <li className="nav-item">
        <button> <Link to="/Que10">Que NO.10</Link> </button>
        </li>
        <li className="nav-item">
        <button> <Link to="/Form">Form</Link> </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}