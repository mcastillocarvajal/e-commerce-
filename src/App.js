import React, { useContext } from "react";
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";
import './App.css';


function App() {
  const { store, actions } = useContext(Context);
  const print = () => {
    console.log(">>>>>>>App", store.products)
  } 

  return (
    <>
      <h1 className="text-red-600">HELLO WORLD</h1> 
      <h1 className="text-red-600">jhsdafjsd</h1> 
      <button className="border border-black w-60" onClick={print}>
        Click
      </button>
      {store.products.map((item, i) => {
        return (
          <h2 key={i}>{item.title}</h2>
        )
      })}
    </>
  );
}

export default injectContext(App);
