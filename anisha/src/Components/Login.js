import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../Components/style.css';

export default function Login() {

  const [inputFields, setInputFields] = useState({
    name: " ",
    email:" "
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };
  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.name.length < 15) {
      errors.email = "Email is too short";
    }
    if (inputValues.email.length < 15) {
      errors.password = "Password is too short";
    }
  
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };
  const finishSubmit = () => {
    console.log(inputFields);
  };
    useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);
  return (
    <div>
      <div className='form'>
        {Object.keys(errors).length=== 0 && submitting?
        (<span className='success'>Sucessfull</span>):null}
    <form   >
    
        Name: <input type='name' name='name' value={inputFields.name} onChange={handleChange}/><br/>
        Email: <input type='email' name='email'value={inputFields.email} onChange={handleChange}/><br/>
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
        Country: <input type='name' name='country' value='Nepal'/><br/>
        Image:<input type='file' name='photo'/><br/>

        <input type='Submit' value="submit" onSubmit={handleSubmit}  />

    </form>
</div>
    </div>
  )
}
