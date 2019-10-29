import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [testStr, testSTRFunction] = useState("");
	const [manyStrings, setMANYFunction] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello world
	  </p>
	  <input onChange={e => testSTRFunction(e.target.value)}/>

	  {testStr}
         <button onClick={() => console.log("Button clicked!!!" )}>Click me</button> 
        <button onClick={() => {
	var temp = manyStrings;
		temp.push(testStr)
	setMANYFunction(temp);
	}}>Make list</button>
	  {manyStrings}	  
	  </a>
      </header>
    </div>
  );
}

export default App;
