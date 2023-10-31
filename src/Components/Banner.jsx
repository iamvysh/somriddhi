import React from 'react'
import Image from "../assets/Banner.png"
import "../style/Banner.css"

const Banner = () => {
  return (
    <>
      <div style={{width:"100%",display:'flex',justifyContent:'center',padding:' 40px 0px 16px 0px'}}>

        <div  
        className='banner_image'
        
        >


             <img src={Image} alt="imAGE"  />


        </div>

        

      </div>
    </>
  )
}

export default Banner
