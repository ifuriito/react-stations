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
  const [dogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  return (
    <header>
      <h1>Dogアプリ</h1>
      <p>説明文</p>
      <img src={dogUrl}></img>
    </header>
  )
}
