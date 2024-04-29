import React from 'react'

const Contact=(props)=> {
  return (
    <div className='contacting'>
    {props.data.name}<br/>
    {props.data.number}<br/>
    {props.data.location}
<hr/>
    </div>
  )
}
export default Contact;
