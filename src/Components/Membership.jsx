import React from 'react'
import "../style/Membership.css"
import image from "../assets/image 12.png"

const Membership = () => {
  return (
    <>
    <div className="membership_main_div">
        <div className="membership_heading">
            <span className='membership_header'>Popular Membership</span>
             <div className="redthread">
                
             </div>
        </div>
        <div className="membership_pictures">
            <div className="membership_upper">

            <div className="membership_pictures_1">

              </div>
            <div className="membership_pictures_2">

                <div className="amazon_card_div">
                    <div className="amazon_card_div_top" style={{borderBottom:"1px solid #ECECEC"}}>

      <div className="card_section" style={{borderRight:"1px solid #ECECEC"}}>

                 <div className="card_section_top">
                 <img src={image} alt="" srcset="" />
                  <span className='text_card'>Amazon</span>


                 </div>
                 <div className="card_section_bottom">
                 <span className='offer_text'>Flat 30% Off</span>
                 <button className='grabbutton'>GRAB NOW</button>

                      </div>

        </div>


        <div className="card_section" style={{borderBottom:"1px solid #ECECEC",marginLeft:"10px"}}>

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


                    <div className="amazon_card_div_bottom">

                    <div className="card_section" style={{borderRight:"1px solid #ECECEC"}}>

<div className="card_section_top">
<img src={image} alt="" srcset="" />
 <span className='text_card'>Amazon</span>


</div>
<div className="card_section_bottom">
<span className='offer_text'>Flat 30% Off</span>
<button className='grabbutton'>GRAB NOW</button>

     </div>

</div>




<div className="card_section" style={{marginLeft:"10px"}}>

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
    
             </div>

            </div>

            <div className="membership_lower">

            <div className="membership_pictures_3">

           </div>
           <div className="membership_pictures_4">

           </div>


            </div>



            

        </div>

        <div className="dots">
        <div className="square1"></div>
          <div className="sqare2"></div>
          <div className="sqare2"></div>
        </div>
        

    </div>




    </>
  )
}

export default Membership