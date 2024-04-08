'use client'
import 이미지 from '/public/dogi.png';
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

  const [state, setState] = useState({
    stateOne : 0,
    stateTwo : 1
  });

  const {
    stateOne,
    stateTwo
  } = state;
  
  const handleInputChange = (e) => {
    // Input 값 변경 시 실행
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      stateOne: value,
    }));
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((product, idx) => {
        console.log(product);
        return (
          <h4 key={idx}>{product} $40</h4>
        )
      })}

      <Image src={이미지} alt="설명" />

      <br />
      스테이트 : {JSON.stringify(state)}<br />
      stateOne : <input type='text' value={stateOne} onChange={handleInputChange}></input><br />
      stateTwo : {stateTwo}
    </div>
  )
}