import React from 'react'
import "../style/Howitwork.css"
import login from "../assets/Login.png"
import coupon from "../assets/Coupon.png"
import card from "../assets/Card.png"
import vector1 from "../assets/Vector1.png"
import vector2 from "../assets/Vector2.png"
const Howitworks = () => {
  return (
    <>

    <div className="how_main">

        <div className="how_main_heading">
            <span className='how_main_text'>How It Works?</span>
            <div className="line"></div>
        </div>
        <div className="how_cards">

            <img src={vector1} style={{position:"absolute",left:"196px",top:"53px"}} alt="" srcset="" />
            <img src={vector2} style={{position:"absolute" ,right:"192px",top:"24px"}} alt="" srcset="" />

             <div className="how_card_1">
                <div className="icon_div">
                    <img src={login} alt="" srcset="" />


                </div>
                <span className='signup_text'>Signup</span>
                <span className='signup_contend'>If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>

             </div>
             <div className="how_card_2">
             <div className="icon_div">
                    <img src={coupon} alt="" srcset="" />


                </div>
                <span className='signup_text'>Choose Coupon</span>
                <span className='signup_contend'>If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>

             </div>
             <div className="how_card_3">


             <div className="icon_div">
                    <img src={card} alt="" srcset="" />


                </div>
                <span className='signup_text'>Grab Coupon</span>
                <span className='signup_contend'>If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>

             </div>


        </div>


    </div>




    </>
  )
}

export default Howitworks