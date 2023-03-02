import React from 'react'
import Logo from '../../helps/help'
import './dash.css';
import Topnav from './topnav';
import Book from '../../helps/book';
import Farmer from '../farmer/Farmer';

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
          <Book/>
          <div id='tex'>
           FARMERS' PANEL
            <p>May the grace of our Lord Jesus be with all farmers and all consumers..!! please say Amen</p>
          </div>
        </section>

        <section>
          <Farmer/>
        </section>



     
    </>
  )
}

export default Dashboard