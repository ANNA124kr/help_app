import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function Call(props) {


  const nav = useNavigate()


//user password in Arr
const correct = props.userPsw
//password from input
let psw 
//number of tries
let tries = 0;

//cansel func
const cansel = () => {
  
  do{
    
    let messenge

    if (psw) {
      messenge ='error'
    }else{
      messenge = 'enter password'
    }

    psw = prompt(messenge)

    tries++

    if (tries >= 3){
      document.getElementById('cancel').disabled = true
      break;
    }

    if (psw == correct) {
      nav('/')
      props.saveUser()
    }

  }
  while(psw !== correct)
  // if password from input != user password in Arr

}


  return (
    <div >
        {/* details */}
        {props.user.map((val , index) =>{
            return <div key={index} style={{border:'solid 3px red'}} >
                <p> Name: {val.nameUser}  </p>
                <p> Call: {val.callNumber}  </p>
            </div>
        })}

{/* {showPsw()} */}


<button id='cancel' onClick={cansel}  >Cansel</button>


    </div>
  )
}
