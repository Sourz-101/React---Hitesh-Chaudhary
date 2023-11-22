/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/card'

function App() {
  let myObj = {
    userName: 'Sourabh',
    age: 22
  }

  let newArr = [1,2,3];

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">Tailwind Test</h1>

      <Card userName='SourabhKrSingh' btnText = 'click you'/>
      <Card userName='Sourabh' btnText = 'click you'/>
      
    </>
  );
}

export default App;
