import React from 'react'
import { UilFacebook } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilWhatsappAlt } from '@iconscout/react-unicons';
const Footer = () => {
  return (
    <>
      <div className='Footer'>
      <div className="container">
  <div className="row">
    <div className="col text-center mt-5">
      <h4 className='mt-5'>Useful Links</h4><br/>
      <a href="#" class="link-light">Home</a><br/><br/>
      <a href="#" class="link-light">About Us</a><br/><br/>
      <a href="#" class="link-light">Menu</a><br/><br/>
      <a href="#" class="link-light">Gallery</a><br/><br/>
      <a href="#" class="link-light">Catering</a><br/><br/>
      <a href="#" class="link-light">Work with us</a><br/><br/>
      <a href="#" class="link-light mb-5">Contact Us</a>
    </div>
    <div className="col text-center mt-5">
    <h4 className='text-center mt-5'>Our Timing</h4><br/>
    <label>Monday: 4 PM to 9 PM</label><br/><br/>
    <label>Tuesday: 4 PM to 9 PM</label><br/><br/>
    <label>Wednesday: 11 AM to 9 PM</label><br/><br/>
    <label>Thursday: 11 AM to 9 PM</label><br/><br/>
    <label>Friday: 11 AM to 10 PM</label><br/><br/>
    <label>Saturday: 10 AM to 10 PM</label><br/><br/>
    <label className='mb-5'>Sunday: 10 AM to 9 PM</label><br/>
    </div>
    <div className="col text-center  mt-5">
    <h4 className='mt-5'>Contact Details</h4><br/>
<label>........................,<br/>
Muzaffarpur Bihar 842001<br/><br/>
Phone: +91 9876543210<br/>
Email: abc@gmail.com <br/>
<div className='social-icon'>
<  UilFacebook className="mt-3"/>
<UilInstagram className="mt-3 ms-3"/>
< UilWhatsappAlt className="mt-3 ms-3"/>
</div>
</label>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Footer
