import React from 'react'
import '../Components/style.css';
export default function Login() {
  return (
    <div className='form'>
     <form>
        
     Name: <input type='name' name='name'/><br/>
     Email: <input type='email' name='email'/><br/>
     Phone number: <input type='number' name='phone'/><br/>
     DOB: <input type='Date' name='DOB'/><br/>
      Address<br/>
      City: <input type='name' name='cname'/><br/>
      District: <input type='name' name='dname'/><br/>
      Province:
      <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      </select><br/>
      Country: <input type='name' value='Nepal'/><br/>
      Image:<input type='file' name='photo'/><br/>

     <button>Submit</button>

     </form>
    </div>
  )
}
