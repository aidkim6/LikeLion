import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';
import Map from '../../assets/img/map.png';
import Search from '../../assets/img/search.png';
import Prof from '../../assets/img/prof.png';
import Shopping from '../../assets/img/shopping.png';
import Img01 from '../../assets/img/Section01_1.png';
import Img02 from '../../assets/img/Section01_2.png';
import Img03 from '../../assets/img/Section01_3.png';
import Img04 from '../../assets/img/Section01_4.png';
import Img05 from '../../assets/img/Section01_5.png';
import right from '../../assets/img/right.png';
import left from '../../assets/img/left.png'


const SLIDE_DATA = [
  {
    id: 1,
    bgImage: Img01,
    title: '24 NEW 인터런',
  },
 {
    id: 2,
    bgImage: Img02,
    title: '24 NEW 인터런',
  },
  {
    id: 3,
    bgImage: Img03,
    title: '24 NEW 인터런',
  },
  {
    id: 4,
    bgImage: Img04,
    title: '24 NEW 인터런',
  },
  {
    id: 5,
    bgImage: Img05,
    title: '24 NEW 인터런',
  },
];

const Nav = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_DATA.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);
  };

  return (
    <div 
      className='Main_visual' 
      style={{ backgroundImage: `url(${SLIDE_DATA[currentSlide].bgImage})` }}
    >
  
      <nav className='Nav_main'>
        <img src={Logo} alt="Logo" className="Logo" />
        
        <ul className="Nav_menu">
          <li>WOMEN</li>
          <li>MEN</li>
          <li>KIDS</li>
          <li className="divider">TENNIS</li>
          <li>BRAND</li>
        </ul>
        
        <div className="Nav_icons">
          <img src={Map} alt="Map" />
          <img src={Search} alt="Search" />
          <img src={Prof} alt="Prof" />
          <img src={Shopping} alt="Shopping" />
        </div>
      </nav>

      <div className="Main_content">
        <h1 className="Main_title">{SLIDE_DATA[currentSlide].title}</h1>
        <button className="Btn_more">자세히 보기</button>
      </div>

      <div className="Slider_controls">
        <div className="Slide_bar_container">
          <div 
            className="Slide_bar_active" 
            style={{ 
              width: `${((currentSlide + 1) / SLIDE_DATA.length) * 100}%` 
            }}
          />
        </div>
        <div className="Slide_arrows">
          <img 
            src={left} alt="Previous Slide" className="left" onClick={prevSlide} />
          <img src={right} alt="Next Slide" className="right" onClick={nextSlide}/>
        </div>
      </div>
    </div>
  );
};

export default Nav;