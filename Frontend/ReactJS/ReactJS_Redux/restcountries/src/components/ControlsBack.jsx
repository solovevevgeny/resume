import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';



const ControlsBack = () => {
  const navigate = useNavigate();

  return (
    <section>
        <div className="container controls-back">
            <button className='back' onClick={()=> { navigate("/")}}>
            <IoArrowBackSharp /> Back</button>
        </div>
    </section>
  )
}
export default ControlsBack