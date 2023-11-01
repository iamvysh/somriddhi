import React from 'react'
import '../style/Download.css'
import apple from "../assets/apple.png"
import playsotre from '../assets/playstore.png'

import phone1 from '../assets/phone1.png'
import phone2 from '../assets/Phone2.png'


const Download = () => {
  return (
    <div className='Download_main_div'>
        <div className="Download_subdiv">
            <div className="Download_subdiv_left">
                <div className="Download_subdiv_left_top">
                    <span className='Download_subdiv_left_top_c1'>Want to be a <br/>part of our team</span>
                    <span className='Download_subdiv_left_top_c2'>Be a part of best site of discount coupons</span>

                </div>
                <div className="Download_subdiv_left_bottom">
                <button>
                <img src={apple} alt="" />

                <div className="t">
                  <p style={{fontSize:'8px',fontWeight:'600',color:'#747577'}}>Download From</p>
                  <p style={{fontSize:'12px',fontWeight:'600'}}>App Store</p>
                </div>
              </button>
              <button>
                <img src={playsotre} alt="" />

                <div className="t">
                  <p style={{fontSize:'8px',fontWeight:'600',color:'#747577'}}>Download From</p>
                  <p style={{fontSize:'12px',fontWeight:'600'}}>Play Store</p>
                </div>
              </button>
                </div>
                

            </div>
            <div className="Download_subdiv_center">
                <img  src={phone1} alt="" />

            </div>
            <div className="Download_subdiv_end">
                <img src={phone2} alt="" />

            </div>


        </div>


    </div>
  )
}

export default Download