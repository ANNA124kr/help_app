import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomePage(props) {

    // name // password
    const [name , setName] =useState('')
    const [password , setPassword] =useState('')

    const nav = useNavigate()

    
    //valid name & password func

    const valid = () => {
        

        if (name.length < 4 || password.length < 5) {
            return false
        }

        //name
        if ( name.match(/[0-9]/g) ) {
            document.getElementById('nameUser').innerHTML = 'Please, Enter Your Name without numbers'
            return false
        }else{
            document.getElementById('nameUser').innerHTML = ' '
        }
        
        //password
        if (password.length == 8 ) {
            if (password.match(/[a-zA-Z]/g) && password.match(/[0-9]/g)) {
                document.getElementById('password').innerHTML = ''
            }else{
                document.getElementById('password').innerHTML = 'Please , Enter numbers and Big litters'
                return false
            }
        }

        else{
            {props.addUser(name,'101', password)};
            nav('/help')

        }
    }



    return (
    <div>
<p style={{color:'red'}} id='nameUser' ></p>
<input onInput={valid}  onChange={(e) => {setName(e.target.value);}} type="text" placeholder='name' minLength={4}/> 
<p id='password' style={{color:'red'}} ></p>
<input onInput={valid}  onChange={(e) => {setPassword(e.target.value);}} type="text" placeholder='paswword' minLength={2} maxLength={5} /> 




    </div>
  )
}
