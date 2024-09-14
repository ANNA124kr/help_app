import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Help(props) {

// call number which user enter
const [number , setNumber] = useState('101')

const nav = useNavigate()

// go to next page whith details
const nextPage = () => {
    {props.user.map((val , index) =>{
    nav(`/${val.nameUser}/${val.callNumber}`)
    })}
}


  return (
    <div>

        <select onChange={(e)=>{setNumber(e.target.value);props.addUser(props.nameUser , e.target.value , props.password )}}  >
            <option value="101" >A מדא </option>
            <option value="100"> B משטרה</option>
            <option value="102" > C כיבוי והצלה </option>

        </select> <br /> <br />



        <button onClick={()=> {nextPage()}} style={{backgroundColor: 'red' , color: 'white' 
        ,width:'100px', height:'100px' }} >Help</button>


    </div>
  )
}

