import React from 'react'
import Img01 from '../../assets/img/section04_1.png'
import Img02 from '../../assets/img/section04_2.png'
import Img03 from '../../assets/img/section04_3.png'
import Img04 from '../../assets/img/section04_4.png'


const Section05 = () => {
  return (
    <div className="Section5_wrap">
      <div className="media">
        <p>LIKELION MEDIA</p>
      </div>
      <div className="likelion">
        <h1>언론 속의 LIKELION</h1>
      </div>
      <div className="boxs">
        <div className="box">
          <div className="img01">
            <img src={Img01} alt="" className='img01'/>
          </div>
          <div className="news">
            <h5 className="title">“비즈니스 문제 해커톤으로 해결”<br/>…멋쟁이사자처럼, 기업 해커톤<br/>출시</h5>
            <p className='content'>정보기술(IT) 교육 기업 멋쟁이사자처<br/>럼(멋사)은 31일부터 해커톤 참가자들<br/>을 통해 기업이 가진 비즈니스 문제를...</p>
          </div>
          <hr />
          <p className='date'>머니S | 2023.10.31</p>
        </div>
        <div className="box">
          <div className="img02">
            <img src={Img02} alt="" className='img02'/>
          </div>
          <div className="news">
            <h5 className="title">P2E ‘실타래‘, 편의성 강화해 진입<br/>장벽 낮춘다</h5>
            <p className='content'>멋쟁이사자처럼은 메타콩즈뿐 아니라<br/>여러 갈래의 대체불가토큰(NFT) 사업<br/>을 펼쳤다. 멋쟁이사자처럼 산하 블록...</p>
          </div>
          <hr />
          <p className='date'>더별 | 2023.01.27</p>
        </div>
        <div className="box">
          <div className="img03">
            <img src={Img03} alt="" className='img03'/>
          </div>
          <div className="news">
            <h5 className="title">콘크릿, 글로벌 아티스트 톰 삭스와<br/>이태원 전역에서 보물찾기 진행</h5>
            <p className='content'>현대카드와 멋쟁이사자처럼의 합작법<br/>인 모던라이언이 운영하는 NFT 마켓플<br/>레이스 ‘KONKRIT(이하 콘크릿)’이...</p>
          </div>
          <hr />
          <p className='date'>경향게임스 | 2023.09.13</p>
        </div>
        <div className="box">
          <div className="img04">
            <img src={Img04} alt="" className='img04'/>
          </div>
          <div className="news">
            <h5 className="title">멋쟁이사자처럼, 아트 NFT·실물<br/>연계 ‘쿼드해시‘ 프로젝트 띄운다</h5>
            <p className='content'>멋쟁이사자처럼이 아트NFT와 실물을<br/>연계한 대체불가토큰(NFT) 프로젝트<br/>쿼드해시를 추진한다.</p>
          </div>
          <hr />
          <p className='date'>디지털투데이 | 2023.09.27</p>
        </div>
      </div>
    </div>
  )
}

export default Section05