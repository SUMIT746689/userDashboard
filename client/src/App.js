import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';

function App() {
  const [userDashboard,setUserDashboard] = useState([]);

   
  useEffect(()=>{
    fetch('/userCategory/',{
      method:'GET',
    })
    .then((res)=>res.json())
    .then(data=>{
      data.category && setUserDashboard(()=>data.category);
      console.log(data);
    })
    .catch((err)=>{console.log(err)})
  },[])
  

  return (
    
      <div className="App flex min-h-screen">
        <Nav className='w-72 bg-gray-300' userDashboard={userDashboard}/>
        <Routes>
          <Route path="userCategory/:category/:subCata"  element={<Dashboard/>} />
          <Route path="/"  element={<Dashboard/>} />  
        </Routes>

      </div>

    
  );
}

export default App;
