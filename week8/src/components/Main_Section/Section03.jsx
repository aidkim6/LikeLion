import React from 'react';


import Insta01 from '../../assets/img/Section04_1.png';
import Insta02 from '../../assets/img/Section04_2.png';
import Insta03 from '../../assets/img/Section04_3.png';
import Insta04 from '../../assets/img/Section04_4.png';
import Insta05 from '../../assets/img/Section04_5.png';
import Insta06 from '../../assets/img/Section04_6.jpg';
import Insta07 from '../../assets/img/Section04_7.jpg';
import Insta08 from '../../assets/img/Section04_8.jpg';
import Insta09 from '../../assets/img/Section04_9.png';
import Insta10 from '../../assets/img/Section04_10.png';

const INSTA_DATA = [
  { id: 1, img: Insta01 },
  { id: 2, img: Insta02 },
  { id: 3, img: Insta03 },
  { id: 4, img: Insta04 },
  { id: 5, img: Insta05 },
  { id: 6, img: Insta06 },
  { id: 7, img: Insta07 },
  { id: 8, img: Insta08 },
  { id: 9, img: Insta09 },
  { id: 10, img: Insta10 },
];

const Section03 = () => {
  return (
    <div className="Section03">
      <div className="Insta_header">
        <div className="Insta_id">@fila_korea</div>
      </div>

      <div className="Insta_grid_container">
        {INSTA_DATA.map(({ id, img }) => (
          <div key={id} className="Insta_card">
            <div className="Img_box">
              <img src={img} alt={`instagram feed ${id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section03;