import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import Homepage from './Containers/Homepage/Homepage'





function App() {

   const [user, setUser] = useState([]);

   useEffect(() =>{
      Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>{
        setUser(res.data)
      }).catch((err) =>{
        console.log(err)
      })
   },[])



  return (
    <div className="App">
     <header>Chart</header>
     <Homepage/>
   
    </div>
  );
}

export default App;
