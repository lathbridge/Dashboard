import React from 'react'
import "./home.css";
import Logo from '../../helps/help';
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
    
  function MoveToDashboard() {
     navigate("/dashboard");
  }


  return (
    <>
    <section id='homestuff'>
        <Logo/>
        <div id='home'>Home</div>
        <div id='home1'>You are welcomed to Our Farmer App, checkout our Dashboard.</div>
        <div className="bounce">
           <FaArrowDown />
        </div>
       
    </section>

    <button onClick={MoveToDashboard} id="login-button">Click Me</button>
    

    </>
  )
}

export default Home