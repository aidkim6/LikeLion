import React, { useEffect, useState } from 'react';
import { getSRTrainData } from '../api/userApi';

const SRPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getSRTrainData()
      .then(res => setTrains(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>공공데이터 API 활용 과제</h1>
      <h3>최근 1개년 SRT 열차별/역별 누적 승차인원 현황 (2025.04 ~ 2026.04)</h3>
      <table border="1">
        <thead>
          <tr>
            <th>열차번호</th>
            <th>수서</th>
            <th>동탄</th>
            <th>천안아산</th>
            <th>오송</th>
            <th>대전</th>
            <th>김천구미</th>
            <th>동대구</th>
            <th>울산</th>
            <th>부산</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((t, i) => (
            <tr key={i}>
              <td>{t.열차번호}</td>
              <td>{t.수서}</td>
              <td>{t.동탄}</td>
              <td>{t.천안아산}</td>
              <td>{t.오송}</td>
              <td>{t.대전}</td>
              <td>{t.김천구미}</td>
              <td>{t.동대구}</td>
              <td>{t.울산}</td>
              <td>{t.부산}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SRPage;