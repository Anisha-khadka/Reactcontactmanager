import { useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import User from "./Components/User";
import "./Components/style.css";

function App() {
  const getItem=JSON.parse(localStorage.getItem("contacts"));
  const[contacts,setContacts]=useState(getItem?getItem:[])

const seencontact=(contactdata)=>{
  setContacts([...contacts,contactdata])
  localStorage.setItem("contacts",JSON.stringify([...contacts,contactdata]))
}
const clearItems=()=>{
  localStorage.clear();
  setContacts([]);
}
  return (
    <>
      <Navbar/>
      <User onseen={seencontact}/>
      <div className="contact">
        <h1>CONTACT LIST</h1>
       {contacts.map((data)=>(
          <Contact key={data.id} data={data}></Contact>
        ))}
        <button type="button" className="btn btn-danger m-2" onClick={clearItems}>Clear</button>
      </div>
    </>
  );
}

export default App;
