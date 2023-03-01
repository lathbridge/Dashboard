import React from 'react'
import Log from '../../helps/helplogo'
import './topnav.css';
import SearchBar from '../../helps/search';
import Lamp from '../../helps/lamp';
import Msgicon from '../../helps/msgicon';
import Me from '../../helps/me';

function Topnav() {
  return (
    <nav id='topnav'>
        <Log/>

        <div id='topstuff'>
          <div><SearchBar/></div>
          <div id='lamp'> <Lamp/> </div>
          <div id='msgicon'> <Msgicon/> </div>
          <div id='me'> <Me/> </div>
          <div id='texth'>
            Kwame Anim
            <p>Farmer</p>
          </div>

        </div>
        
        
        
        
    </nav>
  )
}

export default Topnav