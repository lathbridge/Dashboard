import React from 'react'
import './farmer.css';
import PicCol from './PicCol';
import Forms from './Forms';
import SecondForms from './SecondForms';

function Farmer() {
  return (
    <section id='farmermain'> 
       <div id='personal'> <h3>Personal Details</h3></div>
       
        <div id='its'>
                <ul id='inside_links'>Name</ul>
                <ul id='inside_links'>Image</ul>
                <ul id='inside_links'>Contact</ul>
                <ul id='inside_links'>Location</ul>
                <ul id='inside_links'>Update</ul>
                <ul id='inside_links'>Credit</ul>
        </div>

        <section id='detail_below'>
          <div> <PicCol/> </div> 

          <aside> <Forms/> </aside>

          <aside> <SecondForms/> </aside>

          <aside>
             <label id='form1labels' >Description:</label>
             <textarea id="description1" name="description" className="form-input"  required></textarea>

             <div id='btns'>
             <button id="rsbutton"> Reset</button>
             <button id="savbtn"> Save</button>
             </div>
          </aside>

        </section>




    </section>
  )
}

export default Farmer