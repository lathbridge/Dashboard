import React from 'react';
import MyPic from '../../helps/MyPic'
import { FaUpload, FaCamera } from 'react-icons/fa';


function PicCol() {

        

  return (
    <div style={{ width:"180px"}}>
        <MyPic/>

        <div style={{justifyContent:'space-between', width:"70px", display:"flex", marginTop:"10px", marginBottom:"40px"}}>
                
               <div  style={{ display:"block", fontSize:"10px", textAlign:"center", marginRight:"20px"}}>
                     <FaCamera style={{borderRadius:"50px", border:"1px solid gray",fontSize:"20px",padding:"3px"}}/> Photo
                </div>

                <div style={{ display:"block", fontSize:"10px", textAlign:"center", marginLeft:"15px"}}>
                     <FaUpload style={{borderRadius:"50px", border:"1px solid gray",fontSize:"20px",padding:"3px"}} /> Upload
                </div>
              
        </div>


        <div style={{padding:"0px"}}>
           <p style={{padding:"0px",marginBottom:"0px", marginLeft:"3px",fontSize:"13px"}}>Gender</p>    
            <div >
                <label style={{padding:"0px",marginBottom:"0px",fontSize:"12px",marginRight:"22px", color:"gray"}}>
                  <input type="checkbox"  style={{ width:"11px", height:"11px", marginRight:"6px", borderRadius:"50px",backgroundColor:"green" }}/>
                  Male
                </label>
               
                <label style={{padding:"0px",marginBottom:"0px",fontSize:"12px",color:"gray"}}>
                  <input type="checkbox"  style={{ width:"11px", height:"11px", marginRight:"6px", borderRadius:"50px",backgroundColor:"green" }} />
                  Female
                </label>
             </div>
        </div>


    </div>
  )
}

export default PicCol