import React, { useState } from 'react'

export default function User(props) {
  const[name,setName]=useState();
  const[number,setNumber]=useState();
  const[location,setLocation]=useState();

  const onclickhandler=()=>{
   const contactdata={id:Math.random(),name,number,location}
   if(name<1 || number<1 || location<1){
    alert("Please fill all fields")
   }
   else{
   props.onseen(contactdata)
   setName("");
   setNumber("");
   setLocation("");

   }
  }
  return (
    <div>
      <form>
        <input type='text' placeholder='Fullname' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type='tel' placeholder='Phn.number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <input type='text' placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
        <button type='button' className='btn btn-primary' onClick={onclickhandler}>Submit</button>


      </form>
    </div>
  )
}
