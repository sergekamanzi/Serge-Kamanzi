import React from 'react'
import './contact.css'
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const contact = () => {
  return (
    <div className='main-contact'>
       <div className='contact-info'> 
         <h6>Let's Connect <RiKakaoTalkFill /></h6>
         <p><MdEmail /> sergekmz187@gmail.com</p>
         <p><BsFillTelephoneForwardFill />+250780032791</p>
      </div>
      <div className='contact-form'>
        <form action="">
            <input type="text" placeholder='Names' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <input type="text" placeholder='Phone' />
            <textarea type="text" placeholder='Message'></textarea>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default contact
