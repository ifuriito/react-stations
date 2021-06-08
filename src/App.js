// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react';
import './App.css'
/**
 *
 * @type {React.FC}
 */
export function App() {
  // Declare a new state variable, which we'll call "count"
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  async function getDogUrl() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    const url = JSON.stringify(data);
    const dogJson = JSON.parse(url);
    setDogUrl(dogJson.message);
  }

  return (
    <header>
      <h1>Dogアプリ</h1>
      <p>説明文</p>
      <img src={dogUrl}></img>
      <button onClick={() => getDogUrl()}>
        更新
      </button>
    </header>
  )
}
