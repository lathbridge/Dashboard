import React, { useState } from 'react';
import "./forms.css";

function Forms() {

    const [name, setName] = useState('');
    const [place, setplace] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [description, setDescription] = useState('');
  
  return (


   
        <form>
          <label id='form1labels'  htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
    
          <label  id='form1labels' htmlFor="dob">Place Of Birth</label>
          <input type="text" id="place" name="place" className="form-input" value={place} onChange={(e) => setplace(e.target.value)} required />
    
          <label id='form1labels'  htmlFor="house-number">House number:</label>
          <input type="text" id="house-number" name="house-number" className="form-input" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} required />
    
          <label id='form1labels'  htmlFor="description">Description:</label>
          <textarea id="description" name="description" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
    
          <label id='form1labels'  htmlFor="region">Region:</label>
          <input type="text" className="form-input"/>
        </form>
 
  )
}

export default Forms