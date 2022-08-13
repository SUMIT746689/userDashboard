import logo from './logo.svg';
import './App.css';
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
      <div className='max-w-2xl relative m-auto text-6xl uppercase text-gray-300 font-semibold'>
        Please first Select a category
      </div>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
