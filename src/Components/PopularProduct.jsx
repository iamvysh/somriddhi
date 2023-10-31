import React from "react";
import "../style/Popularproduct.css";
import image from "../assets/image 12.png"

const PopularProduct = () => {
  return (
    <div className="popularproduct">


      <div className="tabs">


        <div className="tab">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
          >
            <g clip-path="url(#clip0_1_66)">
              <path
                d="M6.5 8.469V9.5H9V10.5H3V9.5H5.5V8.469C4.53335 8.34711 3.64441 7.87663 3 7.14587C2.35559 6.41512 2.00002 5.47431 2 4.5V1.5H10V4.5C9.99998 5.47431 9.64441 6.41512 9 7.14587C8.35559 7.87663 7.46665 8.34711 6.5 8.469ZM3 2.5V4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5V2.5H3ZM0.5 2.5H1.5V4.5H0.5V2.5ZM10.5 2.5H11.5V4.5H10.5V2.5Z"
                fill="#0C1230"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_66">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="coupon">Popular Coupons</span>
          
        </div>

        <div className="tab1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
          >
            <g clip-path="url(#clip0_1_69)">
              <path
                d="M8.809 2.984L9.5355 2.2575L10.2425 2.9645L9.516 3.691C10.2339 4.58958 10.5805 5.72894 10.4845 6.87507C10.3886 8.02119 9.8575 9.0871 9.00024 9.85386C8.14299 10.6206 7.02468 11.03 5.87499 10.998C4.7253 10.966 3.6315 10.495 2.81823 9.68176C2.00497 8.8685 1.53396 7.7747 1.50196 6.62501C1.46995 5.47532 1.87937 4.35701 2.64614 3.49976C3.4129 2.6425 4.4788 2.11138 5.62493 2.01546C6.77106 1.91954 7.91042 2.26612 8.809 2.984ZM6 10C6.45963 10 6.91475 9.90947 7.33939 9.73358C7.76403 9.55769 8.14987 9.29988 8.47487 8.97487C8.79988 8.64987 9.05769 8.26403 9.23358 7.83939C9.40947 7.41475 9.5 6.95963 9.5 6.5C9.5 6.04037 9.40947 5.58525 9.23358 5.16061C9.05769 4.73597 8.79988 4.35013 8.47487 4.02513C8.14987 3.70012 7.76403 3.44231 7.33939 3.26642C6.91475 3.09053 6.45963 3 6 3C5.07174 3 4.1815 3.36875 3.52513 4.02513C2.86875 4.6815 2.5 5.57174 2.5 6.5C2.5 7.42826 2.86875 8.3185 3.52513 8.97487C4.1815 9.63125 5.07174 10 6 10ZM5.5 4H6.5V7H5.5V4ZM4 0.5H8V1.5H4V0.5Z"
                fill="#0C1230"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_69">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="ending">Ending Soon</span>
          
        </div>


        <div className="tab1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
          >
            <g clip-path="url(#clip0_1_72)">
              <path
                d="M6 11.5C6.99456 11.5 7.94839 11.1049 8.65165 10.4017C9.35491 9.69839 9.75 8.74456 9.75 7.75C9.75 7.317 9.635 6.9015 9.5 6.515C8.6665 7.3385 8.0335 7.75 7.6 7.75C9.5975 4.25 8.5 2.75 5.5 0.75C5.75 3.25 4.102 4.387 3.431 5.0185C2.88366 5.53334 2.50362 6.20074 2.34014 6.93416C2.17667 7.66759 2.2373 8.43321 2.51417 9.13177C2.79105 9.83032 3.27141 10.4296 3.89295 10.8519C4.5145 11.2741 5.24858 11.4999 6 11.5ZM6.355 2.6175C7.9755 3.9925 7.9835 5.061 6.7315 7.2545C6.351 7.921 6.8325 8.75 7.6 8.75C7.944 8.75 8.292 8.65 8.6595 8.4525C8.55057 8.86399 8.3476 9.24458 8.06658 9.56429C7.78556 9.884 7.43415 10.1341 7.04004 10.2949C6.64592 10.4558 6.21985 10.5229 5.79538 10.491C5.37091 10.4592 4.95962 10.3293 4.5939 10.1115C4.22819 9.89364 3.91803 9.59391 3.68784 9.23585C3.45766 8.87779 3.31374 8.47118 3.26741 8.04805C3.22108 7.62491 3.27361 7.1968 3.42087 6.79741C3.56812 6.39803 3.80608 6.03829 4.116 5.7465C4.179 5.6875 4.4985 5.404 4.5125 5.3915C4.7245 5.2015 4.899 5.033 5.0715 4.8485C5.6865 4.1895 6.1285 3.4585 6.3545 2.6175H6.355Z"
                fill="#0C1230"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_72">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          
          <span className="ending"> Latest Coupons</span>
        </div>

      </div>


      <div className="card_div">

        <div className="card_upper_div">
        <div className="card">

             <div className="offer">
                <div className="offer_upper">
                    <span className="card_content">
                    Upto 60% off on Appliances
                    </span>
                </div>
                <div className="card_image">
                    <img src={image} alt="" srcset="" />
                </div>
                <div className="offer_lower">
                    <span className="card_lower_content">
                    Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
                    </span>
                </div>

             </div>
             <button className='offer_button'>
                
                GRAB NOW
             </button>
        </div>

        <div className="card">

             <div className="offer">
                <div className="offer_upper">
                    <span className="card_content">
                    Upto 60% off on Appliances
                    </span>
                </div>
                <div className="card_image">
                    <img src={image} alt="" srcset="" />
                </div>
                <div className="offer_lower">
                    <span className="card_lower_content">
                    Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
                    </span>
                </div>

             </div>
             <button className='offer_button'>
                
                GRAB NOW
             </button>
        </div>

        <div className="card">

             <div className="offer">
                <div className="offer_upper">
                    <span className="card_content">
                    Upto 60% off on Appliances
                    </span>
                </div>
                <div className="card_image">
                    <img src={image} alt="" srcset="" />
                </div>
                <div className="offer_lower">
                    <span className="card_lower_content">
                    Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
                    </span>
                </div>

             </div>
             <button className='offer_button'>
                
                GRAB NOW
             </button>
        </div>

        <div className="card">

<div className="offer">
   <div className="offer_upper">
       <span className="card_content">
       Upto 60% off on Appliances
       </span>
   </div>
   <div className="card_image">
       <img src={image} alt="" srcset="" />
   </div>
   <div className="offer_lower">
       <span className="card_lower_content">
       Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
       </span>
   </div>

</div>
<button className='offer_button'>
   
   GRAB NOW
</button>
</div>
        </div>
        <div className="card_lower_div">

        <div className="card">

<div className="offer">
   <div className="offer_upper">
       <span className="card_content">
       Upto 60% off on Appliances
       </span>
   </div>
   <div className="card_image">
       <img src={image} alt="" srcset="" />
   </div>
   <div className="offer_lower">
       <span className="card_lower_content">
       Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
       </span>
   </div>

</div>
<button className='offer_button'>
   
   GRAB NOW
</button>
</div>

<div className="card">

<div className="offer">
   <div className="offer_upper">
       <span className="card_content">
       Upto 60% off on Appliances
       </span>
   </div>
   <div className="card_image">
       <img src={image} alt="" srcset="" />
   </div>
   <div className="offer_lower">
       <span className="card_lower_content">
       Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
       </span>
   </div>

</div>
<button className='offer_button'>
   
   GRAB NOW
</button>
</div>

<div className="card">

<div className="offer">
   <div className="offer_upper">
       <span className="card_content">
       Upto 60% off on Appliances
       </span>
   </div>
   <div className="card_image">
       <img src={image} alt="" srcset="" />
   </div>
   <div className="offer_lower">
       <span className="card_lower_content">
       Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
       </span>
   </div>

</div>
<button className='offer_button'>
   
   GRAB NOW
</button>
</div>

<div className="card">

<div className="offer">
<div className="offer_upper">
<span className="card_content">
Upto 60% off on Appliances
</span>
</div>
<div className="card_image">
<img src={image} alt="" srcset="" />
</div>
<div className="offer_lower">
<span className="card_lower_content">
Upto 60% off on summer <span style={{textAlign:"center", marginLeft:"40px"}}>Appliances</span>
</span>
</div>

</div>
<button className='offer_button'>

GRAB NOW
</button>
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
  );
};

export default PopularProduct;
