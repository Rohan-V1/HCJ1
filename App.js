import './App.css';
import Arrow from './Components/Arrow';
//import MUI from './Components/MUI';
import Array from './Components/Array';
import Destructuring from './Components/Destructuring';
import Table from './Components/Table';
import Spread from './Components/Spread';
import Ternary from './Components/Ternary';
import MUI from './Components/MUI';
import Props from './Components/Props';
import Home from './Components/Home';
import State from './Components/State';
import Color from './Components/Color';
import Effect from './Components/Effect';
import Error from './Components/Error';
// import API from './Components/MUI/API';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import API from './Components/MUI/API';

function App() {
  // let name="money"

  // let mystyle={
  //   color: "blue",
  //   backgroundColor:"cyan"
  // }

  // function Click(){
  //   alert("hello")
  // }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/arrow" element={<Arrow/>} />
        <Route path="/array" element={<Array/>} />
        <Route path="/destructuring" element={<Destructuring/>} />
        <Route path="/props" element={<Props/>} />
        <Route path="/spread" element={<Spread/>} />
        <Route path="/table" element={<Table/>} />
        <Route path="/mui" element={<MUI/>} />
        <Route path="/ternary" element={<Ternary/>} />
        <Route path="/state" element={<State/>} />
        <Route path="/color" element={<Color/>} />
        <Route path="/effect" element={<Effect/>} />
        <Route path="/api" element={<API/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    // <div id={'co'}>
    //   <h1 className='headone'>Hello</h1>
    //   <h2 style={{color:"orange", backgroundColor:"yellow"}}>World</h2>
    //   <h3 style={mystyle}>Cup</h3>
    //   <img id={'heli'} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/LAPD_Bell_206_Jetranger.jpg/1200px-LAPD_Bell_206_Jetranger.jpg"} alt="Logo" />
    //    <button onClick={Click}>Click</button>
    //     <Arrow/>
    //     <div className='blank'></div>
    //     <MUI/>
    //     <div className='blank'></div>
    //     <Array/>
    //     <div className='blank'></div>
    //     <Destructuring/>
    //     <div className='blank'></div>
    //     <Table/>
    //     <div className='blank'></div>
    //     <Spread/>
    //     <div className='blank'></div>
    //     <Ternary/>
    //     <div className='blank'></div>
    //     <Props name={name}  click={Click}/>



    // </div>
  );
}

export default App;
