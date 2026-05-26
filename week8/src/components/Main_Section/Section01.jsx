import React, { useState } from 'react';
import Img01 from '../../assets/img/Section02_1.png'
import Img02 from '../../assets/img/Section02_2.png'
import Img03 from '../../assets/img/Section02_3.png'
import Img04 from '../../assets/img/Section02_4.png'
import Img05 from '../../assets/img/Section02_5.png'
import Img06 from '../../assets/img/Section02_6.png'
import Img07 from '../../assets/img/Section02_7.png'
import heart from '../../assets/img/heart.png'

const DATA=[
  { id: 0, text: '# 냉감티셔츠' },
  { id: 1, text: '# 에샤페' },
  { id: 2, text: '# 반팔티셔츠' },
  { id: 3, text: '# 페이토&샌들' },
  { id: 4, text: '# 인터런' },
]

const PRODUCT_DATA = [
  { id: 1, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원', img: Img01 },
  { id: 2, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원', img: Img02 },
  { id: 3, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원', img: Img03 },
  { id: 4, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원', img: Img04 },
  { id: 5, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원', img: Img05 },
  { id: 6, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원', img: Img06 },
  { id: 7, category: '공용 컴포트핏 라이프스타일', name: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원', img: Img07 }
];

const Section01 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="Product_section">
      <h2 className="Section_title">지금 많이 찾는 상품</h2>

    <ul className="Tab_menu">
        {DATA.map((tab) => (
          <li
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.text}
          </li>
        ))}
      </ul>


      <div className="Product_container">
        <div className="Product_list">
          {PRODUCT_DATA.map((product) => (
            <div key={product.id} className="Product_card">
              <div className="Img_box">
                <img src={product.img} alt={product.name} className="Prod_img" />
              </div>
              <div className="Info_box">
                <span className="Category">{product.category}</span>
                <h3 className="Prod_name">{product.name}</h3>
                <div className="Price_row">
                  <span className="Price">{product.price}</span>
                  <button className="Btn_like">
                    <img src={heart} alt="like" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section01;
