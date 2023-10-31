import React from "react";
import "../style/Coupen.css";

const Coupon = () => {
  return (
    <>
      <div className="main_coupen_div">
        <div className="coupen_heading">
          <span className="heading">Coupon By Categories</span>
          <div className="line"></div>
        </div>
        <div className="fashion_cards">
          <div className="fashion_card">
            <div className="image_container"></div>
            <div className="image_content">
              <span className="image_text">Fashion</span>
            </div>
          </div>
          <div className="fashion_card">
            <div className="image_container2"></div>
            <div className="image_content">
              <span className="image_text">Food</span>
            </div>
          </div>

          <div className="fashion_card">
            <div className="image_container3"></div>
            <div className="image_content">
              <span className="image_text">Beauty</span>
            </div>
          </div>

          <div className="fashion_card">
            <div className="image_container4"></div>
            <div className="image_content">
              <span className="image_text">Toys</span>
            </div>
          </div>

          <div className="fashion_card">
            <div className="image_container5"></div>
            <div className="image_content">
              <span className="image_text">Cloud</span>
            </div>
          </div>

          <div className="fashion_card">
            <div className="image_container6"></div>
            <div className="image_content">
              <span className="image_text">Gaming</span>
            </div>
          </div>

          <div className="fashion_card">
            <div className="image_container7"></div>
            <div className="image_content">
              <span className="image_text">Phones</span>
            </div>
          </div>

          <div className="fashion_card">
            <div className="image_container8"></div>
            <div className="image_content">
              <span className="image_text">Travel</span>
            </div>
          </div>

          <div className="fashion_card">
            <div className="image_container9"></div>
            <div className="image_content">
              <span className="image_text">Movies</span>
            </div>
          </div>
        </div>

        <div className="remaining_div">

        </div>
      </div>
    </>
  );
};

export default Coupon;
