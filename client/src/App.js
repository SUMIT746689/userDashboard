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
    <div className="App">
      <Nav userDashboard={userDashboard}/>
      <Dashboard/>
    </div>
  );
}

export default App;