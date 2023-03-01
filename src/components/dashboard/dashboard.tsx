import React from 'react'
import Logo from '../../helps/help'
import './dash.css';
import Topnav from './topnav';

function Dashboard() {
  return (
    <>  
     {<Topnav/>}
        
        <aside id='sidebar'>
            <div id='logo'>
                <Logo/>
            </div>
            <h4> MAIN NAVIGATION</h4>
            <div>
                <ul>Dashboard</ul>
                <ul>Farmers</ul>
                <ul>Staff</ul>
                <ul>Synchronisation</ul>
                <ul>Setting</ul>
                <ul>Report</ul>
            </div>
        </aside>

        <section id='main'>

        </section>

     
    </>
  )
}

export default Dashboard