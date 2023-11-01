import React from 'react'
import Image from "../assets/logo.png"
import "../style/Header.css"
import search from "../assets/search.png"

const Header = () => {

  return (
    <>
      <div style={{height:"128px"}}>

        <div style={{height:"82px",width:"860px",marginLeft:"auto",marginRight:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

            <div>
                <img src={Image} alt="" srcset="" />
            </div>
            <div >
                
                <input type="text" className='textfield' placeholder={`${search}Search For brand, category, coupon`}/>

            </div>
            <div className='buttondiv'>

          <button className='button'>Login / Sign Up</button>

        </div>



        </div>
        <div style={{width:"100%", height:"44px",backgroundColor:"#091431",display:"flex",justifyContent:"center"}}>
            <div className='nav-items'><span className='texts'>Home</span></div>
            <div  className='nav-items'><span className='texts'>Deals</span></div>
            <div  className='nav-items'><span className='texts'>Coupon</span></div>
            <div className='nav-items'><span className='texts'>Stores</span></div>
            <div className='nav-items'><span className='texts'>Contact us</span></div>


        </div>

        

      </div>
    </>
  )
}

export default Header
