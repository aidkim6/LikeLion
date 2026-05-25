import React, { useEffect } from 'react';
// 1. 이미지를 import 합니다. (경로는 App.js와 동일하게 맞춰주세요)
import markerPhoto from "../assets/img/pointer.png"; 

const { kakao } = window;

export const Map = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5913, 127.0175),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    // 2. import한 이미지를 카카오맵 마커 이미지로 변환합니다.
    const imageSize = new kakao.maps.Size(15, 15); // 마커의 크기 (가로, 세로)
    const imageOption = { offset: new kakao.maps.Point(17.5, 35) }; // 마커의 좌표와 일치시킬 이미지 안의 지점
    
    const markerImage = new kakao.maps.MarkerImage(markerPhoto, imageSize, imageOption);

    const places = [
      { name: "펠어커피초코", lat: 37.5925, lng: 127.0150 },
      { name: "초이양식", lat: 37.5910, lng: 127.0175 },
      { name: "빵어당", lat: 37.5900, lng: 127.0195 }
    ];
import React, { useEffect } from 'react';
import markerPhoto from "../assets/img/pointer.png"; 

const { kakao } = window;

export const Map = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    // 세 장소의 중간 지점인 성신여대입구역 인근으로 중심 설정
    const options = {
      center: new kakao.maps.LatLng(37.5900, 127.0185), 
      level: 4 // 세 장소가 다 보이도록 레벨을 4로 살짝 낮췄습니다.
    };
    const map = new kakao.maps.Map(container, options);

    const imageSize = new kakao.maps.Size(35, 35);
    const imageOption = { offset: new kakao.maps.Point(17, 35) };
    const markerImage = new kakao.maps.MarkerImage(markerPhoto, imageSize, imageOption);

    const places = [
      { name: "대성칼국수", lat: 37.5849, lng: 127.0210 },
      { name: "정통집", lat: 37.5921, lng: 127.0173 },
      { name: "엘리카츠", lat: 37.5930, lng: 127.0195 }
    ];

    places.forEach((place) => {
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(place.lat, place.lng),
        map: map,
        image: markerImage
      });
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};
    places.forEach((place) => {
      const markerPosition = new kakao.maps.LatLng(place.lat, place.lng);
      
      // 3. 마커 생성 시 위에서 만든 markerImage를 적용합니다.
      new kakao.maps.Marker({
        position: markerPosition,
        map: map,
        image: markerImage // 본인의 사진 이미지 적용
      });
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};