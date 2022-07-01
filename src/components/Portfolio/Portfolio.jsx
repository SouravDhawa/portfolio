import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/pr2.png";
import Ecommerce from "../../img/pr1.png";
// import HOC from "../../img/sugarCosmatic.png";
import MusicApp from "../../img/pr5.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://grand-frangollo-bd65c8.netlify.app/"><img src={Sidebar} alt="" /></a>  
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://ephemeral-treacle-a01c06.netlify.app/"><img src={Ecommerce} alt="" /></a>  
        </SwiperSlide>
        <SwiperSlide>
         <a href=""><img src={MusicApp} alt="" /></a> 
        </SwiperSlide>
       
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
