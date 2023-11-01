import React from 'react'
import "../style/Newletter.css"
import union1 from "../assets/Union.svg"
import union2 from "../assets/Union 2.svg"
import union3 from "../assets/Union 3.svg"

const Newsletter = () => {
  return (
    <>

    <div className="newletter_main">

        <div className="main_rectangle">
            <div className="sub_rectangle">
                <div className="sub_rectangle_1">

                 <img style={{position:'absolute',top:'32px',left:'9px'}} src={union1} alt="" />
                 <img style={{position:'absolute',top:'34px',left:'298px'}} src={union1} alt="" />
                 <img style={{position:'absolute',top:'5px',left:'125px'}} src={union2} alt="" />
                 <img style={{position:'absolute',top:'77px',left:'187px'}} src={union3} alt="" />
                 <div className="bag_img">

                 </div>

                </div>
                <div className="sub_rectangle_2">
                    <div className="sub_rectangle2_upper_div">
                        <div className="main_text_div">
                            <span className='content1'>
                            Subscribe to our Newsletter!
                            </span>

                        </div>
                        <div className="sub_text_div">
                                <span className='content2'>Be the first to get exclusive offers
ands the latest news</span>
                        </div>

                    </div>
                    <div className="sub_rectangle2_lower_div">
                        <input type="text" className='emaildiv' placeholder='Enter your email address'/>
                        <button className='email_button'>SUBSCRIBE</button>
                    </div>


                </div>

            </div>

        </div>

    </div>




    </>
  )
}

export default Newsletter