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
    <body>
      <div class="text">
        <p>説明文</p>
      </div>
      <div class="content">
        <div class="img">
          <img src={dogUrl}></img>
        </div>
        <br></br>
        <div class="button-place">
          <button onClick={() => getDogUrl()}>
            更新
          </button>
        </div>
      </div>

    </body>
  )
}
