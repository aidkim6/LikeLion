import React, { Component, useState } from 'react';

const Main = () =>{
    const[myName, setMyName]=useState("jiwon");

    const changeName = () => {
        setMyName(myName === "jiwon" ? "yoyo" : "jiwon")
        console.log(myName);
    }

    return(
        <div>
        <h1>안녕하세요. {myName} 입니다. </h1>
        <button onClick={changeName}>이름 바꾸기</button>
        </div>
    )
}

export default Main;