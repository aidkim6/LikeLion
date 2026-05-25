import React, { useEffect } from "react";
import "./App.css";
import markerPhoto from "./assets/img/pointer.png";

const { kakao } = window;

function App() {

  const places = [
    { name: "대성칼국수", addr: "서울특별시 성북구 동소문로20가길 36", lat: 37.593007, lng: 127.018246 },
    { name: "정통집 성신여대점", addr: "서울특별시 성북구 동선동1가 28", lat: 37.591431, lng: 127.017812 },
    { name: "엘리카츠 성신여대본점", addr: "서울 성북구 보문로34길 68-6", lat: 37.590831, lng: 127.019174 }
  ];

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
     
      center: new kakao.maps.LatLng(37.5918, 127.0184),
      level: 3 
    };
    const map = new kakao.maps.Map(container, options);

    
    const imageSize = new kakao.maps.Size(30, 30); 
    const imageOption = { offset: new kakao.maps.Point(15, 30) }; 
    const markerImage = new kakao.maps.MarkerImage(markerPhoto, imageSize, imageOption);

    places.forEach((place) => {
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(place.lat, place.lng),
        map: map,
        image: markerImage
      });
    });
  }, []);

  return (
    <div className="map-container">
      <div className="side-panel">
        <h2 className="title">My Hot-place Map</h2>
        <p className="subtitle">Saved Places</p>
        <div className="place-list">
          {places.map((place, index) => (
            <div key={index} className="place-item">
              <div className="icon">
                <img src={markerPhoto} alt="pointer" className="list-icon" />
              </div>
              <div className="info">
                <strong className="place-name">{place.name}</strong>
                <p className="place-addr">{place.addr}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="map-view">
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>
    </div>
  );
}

export default App;