
import './App.css';
import { HashRouter as BrowserRouter, Routes ,Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import { useState } from 'react';
import Help from './components/Help'
import Call from './components/Call'


function App() {

// user Arr // save user in Arr
const[usersArr , setUsersArr] = useState([])

// save user func
const saveUser = () => {
  setUsersArr([...usersArr , user])
}


  // user // add user func
const [user , setUser] = useState([])

const addUser = (nameUser , callNumber ,psw ) => {
setUser([{nameUser:nameUser,callNumber:callNumber , password:psw}])
}


  return (
    <div className="App">

      <BrowserRouter>

<div style={{display:'flex', flexDirection:'row' , justifyContent:'center'  }} >

{user.map((val ,index) => {
  return <p key={index} > {val.callNumber} </p>
})}
<h1>Help</h1>

</div>

      <Routes>

      <Route path='/' element = {<HomePage addUser ={addUser} user = {user} />}  />

      {user.map((val,index) => {
        return <Route path={`/help`} element = {<Help addUser ={addUser} user ={user} nameUser={val.nameUser} callNumber ={val.callNumber} password = {val.password} />} key={index} />
      })}

      {user.map((val , index) => {
        return <Route path= {`/${val.nameUser}/${val.callNumber}`} element ={<Call user={user} callNumber ={val.callNumber} userPsw= {val.password} saveUser = {saveUser}  />} key={index}  />
      })}
      

      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
