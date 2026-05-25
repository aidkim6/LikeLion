import React, { useEffect, useRef } from "react";


export const Map = () => {
  const container = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    if (!kakao) {
      console.error("카카오맵 SDK가 로드되지 않았습니다.");
      return;
    }

    const position = new kakao.maps.LatLng(37.591310, 127.022131);

    const options = {
      center: position,
      level: 3,
    };

    const map = new kakao.maps.Map(container.current, options);
  }, []);

  return (
    <div
      ref={container}
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
};