import React from 'react'
import "../style/Categori.css"

const Categorie = () => {
  return (
    <>
    <div className="category_main_div">
        <div className="category_sub_div">

            <div className="category_sub_left_div">


            </div>

            <div className="category_sub_right_div">

                        <div className="category_sub_right_upper_div">
                            <span className='category_text'>Popular Categories</span>
                            <div className="line"></div>

                        </div>
                        <div className="category_sub_right_lower_div">
                        <table style={{width:"100%",borderCollapse:"collapse"}}>
 
 <tr>
   <th>Flight</th>
   <th>Bus</th>
   <th>Entertainment</th>
   <th>Jewellery</th>
 </tr>
 <tr>
   <th>Medicines</th>
   <th>Hosting</th>

   <th>Flowers</th>
   <th>Beauty</th>
 </tr> <tr>
   <th>OTT</th>
   <th>Bills</th>

   <th>Kids</th>
   <th>Travel</th>
 </tr> <tr>
   <th>Food</th>
   <th>Eyewear</th>

   <th>Lifestyle</th>
   <th>Kitchen</th>
 </tr><tr>
   <th>Recharge</th>
   <th>Electronics</th>

   <th>Hotel</th>
   <th>Footwear</th>
 </tr><tr>
   <th>Lab</th>
   <th>Education</th>

   <th>Services</th>
   <th>Furniture</th>
 </tr><tr>
   <th>Fashion</th>
   <th>Pizza</th>

   <th>Bike</th>
   <th>Novelties</th>
 </tr>
</table>


                        </div>

            </div>


        </div>

    </div>



    </>
  )
}

export default Categorie