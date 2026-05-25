import React, { useState } from "react";
import Main from "./Main";
import "../assets/sass/home.scss"

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div className="home">
            <h2 className="home-title">home화면입니다.</h2>
            {isLoggedIn ? (
                <div>
                <button className="home-btn logout" onClick={() => setIsLoggedIn(false)}> 로그아웃</button>
                </div>
            ):(
                <button className="home-btn login" onClick={() => setIsLoggedIn(true)}>로그인</button>
            )}
        </div>
    )
}