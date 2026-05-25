import React from 'react'
import Logo from '../../assets/img/logo_black.png'

const Footer = () => {
  return (
    <div className='Footer_Wrap'>
      <img src={Logo} alt=''/>
      <div className='left'>
        <div className='left_top'>
          <p className='wordspace'>매장안내    |    공지사항    |    FILA MEMBERSHIP    |    단체 판매    |    대리점 개설문의    |    FILA 입찰 참여 안내</p>
          <br /><p>서울특별시 성북구 보문로 34 휠라코리아(주)  대표이사 : 김지헌</p>
          <p><span>사업자등록번호 : 716-81-01573 </span>
          <span className='small_underline' style={{textDecoration: 'underline', cursor: 'pointer', margin: '0 5px'}}>사업자정보확인</span>
          <span>   |   통신판매업신고 : 제 2020-서울강동-0160호</span></p>
          <p>개인정보 관리책임자 : 이학우</p><br />
          <p>본 사이트의 상품 이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p>
          <p><span>콘센트산업진흥법에 의한 콘텐츠보호안내</span>
          <span className='small' style={{textDecoration: 'underline', cursor: 'pointer'}}>자세히 보기</span></p>
      </div>
      <div className='left_bottom'>
        <p>통합회원 이용약관  |  개인정보 처리방침  |  제보센터</p>
      </div>
    </div>

    <div className='right'>
      <div className='cs'>CS CENTER</div>
      <h2 className='phone'>1577-3472</h2>
      <p className='email'>filaonline@fila.com</p>
      <p className='time'>평일 월 - 금 : 09 - 18시 (공휴일 제외)</p>
    </div>
    </div>
    

    
  )
}

export default Footer
