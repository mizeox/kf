import React, { useEffect } from 'react';
import './App.css';
import fetch from 'node-fetch';
import DeckName from "./components/DeckName"
import { useState } from 'react';



function App() {

  let deckNames: Array<string>= [];
  useEffect(() => {
    (async () => {
      const response = await fetch("https://nodeforge.herokuapp.com/");
      const json = await response.text();
      const obj = JSON.parse(json);
      
      for (let i=0; i<10; i++) {
        let pos = i.toString();
        deckNames.push(obj["data"][pos]["name"]);
      }
      setState(deckNames);
    })();

    
    console.log(deckNames);
  },[]);

  const[state, setState] = useState<Array<string>>([
  "Wielkoduszna Józefa z Trzebini",
  "Gustaw, Jasnowidz Wieży",
  "The Admin of Aerodrome",
  "Poor Thyri of the Chamber",
  "Mentor Arjan Blindlip",
  "She who Ostensibly Heard About Humanity",
  "Mustafuel, Spawn of Ghinismell",
  "Holdsworth, the Rogue of The Stars",
  "The Padwar that Makes Flight",
  "The Flowing Teacher"
])

  async function Test() {
    let response = await fetch("https://nodeforge.herokuapp.com/");
    const json = await response.text();
    const obj = JSON.parse(json);
    
    for (let i=0; i<10; i++) {
      let pos = i.toString();
      deckNames.push(obj["data"][pos]["name"]);
    }
  }
    

Test();


function renderNames(array: Array<string>) {
  let names = [];
  for (let i=0; i < array.length; i++) {
    names.push(renderName(i, array[i]));
  }
  return <div>{names}</div>
}

function renderName(id: number, name: string) {
  return (
    <DeckName
      key={id}
      name={name}
      />
  )
}

  return (
    <div className="App">
      {renderNames(state)}      
    </div>
  );
}

export default App;
