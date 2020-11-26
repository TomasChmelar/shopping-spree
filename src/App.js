import './App.css';
import React, {useState} from "react";
import List from "./Components/List";
import AddNew from "./Components/AddNew";
import Navbar from "./Components/Navbar";

function App() {
  const [Item ,setItem] = useState([]);
  const [Counter ,setCounter] = useState(0);
  const [Input ,setInput] = useState("");
  return (
    <div className="App">
      <Navbar />
      <List Items = {Item}/>
      <AddNew items={Input}setItem={setInput}/>
      <div>Ahoooj</div>
    </div>
  );
}

export default App;
