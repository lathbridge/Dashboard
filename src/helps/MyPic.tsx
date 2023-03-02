import React from 'react'
import Me1 from "../assets/images/me1.jpg"

function MyPic() {
  return (
    <img src={Me1} style={{width:"6rem",height:"6rem", borderRadius:"50px", border:"2px solid green"}}/>
  )
}

export default MyPic