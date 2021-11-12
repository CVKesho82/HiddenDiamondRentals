import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //can have in index.js as well
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import'./App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />    
    </div>     
  );
}
export default App
