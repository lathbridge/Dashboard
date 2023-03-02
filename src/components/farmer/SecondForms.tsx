import React from 'react'

function SecondForms() {
  return (


    <form>
    <label id='form1labels'  htmlFor="name">Last Name:</label>
    <input type="text" id="name" name="name" className="form-input"  required />

    <label  id='form1labels' htmlFor="dob">Date of Birth</label>
    <input type="date" id="dob" name="dob" className="form-input"  required />

    <label id='form1labels'  htmlFor="house-number">Community:</label>
    <input type="text" id="house-number" name="house-number" className="form-input"  required />

    <label id='form1labels'  htmlFor="description">District:</label>
    <textarea id="description" name="description" className="form-input"  required></textarea>

    <label id='form1labels'  htmlFor="region">Marital Status:</label>
          <input type="text" className="form-input"/>
  </form>


  )
}

export default SecondForms