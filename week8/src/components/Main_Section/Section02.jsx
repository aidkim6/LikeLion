import React from 'react';
import Img01 from '../../assets/img/Section03_1.png'; 
import Img02 from '../../assets/img/Section03_2.png'; 

const EXHIBITION_DATA = [
  {
    id: 1,
    img: Img01,
    title: 'FILA CUSTOM STUDIO',
  },
  {
    id: 2,
    img: Img02,
    title: 'Pertex Life',
  },
];

const Section02= () => {
  return (
    <div className="Section02">
      <h2 className="Main_title">기획전</h2>
      
      <div className="Exhibition_container">
        {EXHIBITION_DATA.map((item) => (
          <div key={item.id} className="Exhibition_card">
            <div className="Img_box">
              <img src={item.img} alt={item.title} />
            </div>
            <h3 className="Ex_title">{item.title}</h3>
            <button className="Btn_detail">자세히 보기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section02;