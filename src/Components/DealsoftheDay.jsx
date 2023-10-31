import React from 'react'
import "../style/Dealsoftheday.css"
import image from "../assets/image 12.png"

const DealsoftheDay = () => {
  return (
    <>
    <div className="main_deals_div">

        <div className="dealheading">
            <span className='heading'>Deals Of The Day</span>
            <div className="line"></div>

        </div>
        <div className="card_container">
            <div className="cards">

                <div className="card_section">

                 <div className="card_section_top">
                    <img src={image} alt="" srcset="" />
                    <span className='text_card'>Amazon</span>


                 </div>
                 <div className="card_section_bottom">
                    <span className='offer_text'>Flat 30% Off</span>
                    <button className='grabbutton'>GRAB NOW</button>

                 </div>

                </div>
                 



            </div>
            <div className="cards">

<div className="card_section">

 <div className="card_section_top">
    <img src={image} alt="" srcset="" />
    <span className='text_card'>Amazon</span>


 </div>
 <div className="card_section_bottom">
    <span className='offer_text'>Flat 30% Off</span>
    <button className='grabbutton'>GRAB NOW</button>

 </div>

</div>
 



</div>

<div className="cards">

<div className="card_section">

 <div className="card_section_top">
    <img src={image} alt="" srcset="" />
    <span className='text_card'>Amazon</span>


 </div>
 <div className="card_section_bottom">
    <span className='offer_text'>Flat 30% Off</span>
    <button className='grabbutton'>GRAB NOW</button>

 </div>

</div>
 



</div>

<div className="cards">

<div className="card_section">

 <div className="card_section_top">
    <img src={image} alt="" srcset="" />
    <span className='text_card'>Amazon</span>


 </div>
 <div className="card_section_bottom">
    <span className='offer_text'>Flat 30% Off</span>
    <button className='grabbutton'>GRAB NOW</button>

 </div>

</div>
 



</div>

        </div>


        <div className="rectangles">
        <div className="rectangle1">

        </div>
        <div className="rectagle2"></div>
        <div className="rectagle2"></div>

      </div>

    </div>


      
    </>
  )
}

export default DealsoftheDay
