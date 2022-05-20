import React from "react";

const Navbar = () => {
  return (
    <>
    
<div className='container-fluid' id='back-imge'> 

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 mt-5">
        <li class="nav-item ms-5">
          <a class="nav-link active ms-5" id="home" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ms-2">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item ms-2">
          <a class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item ms-2">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item ms-2">
          <a class="nav-link" href="#">Catering</a>
        </li>
        <li class="nav-item ms-2">
          <a class="nav-link" href="#">Work With Us</a>
        </li>
        <li class="nav-item ms-2">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item ms-2 me-5">
          <a class="nav-link me-5" href="C:\Users\Ankita\Desktop\The Social Kitchen\mykitchen\src\Component\Reservation.js">Reservation</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<div className="hedding">
<label>We Do What You Want!</label>
</div>
<label className="welcome">WELCOME TO THE <span>"</span> HEALTHY & DELICIOUS <span>"</span> WORLD <span>..............!</span> </label>
<div className="button text-center mt-2">
<button type="button" class="btn btn-outline-warning mb-5 ps-4 pe-4">Our Menu</button>
<button type="button" class="btn btn-outline-warning ms-5 mb-5 ps-4 pe-4">Reservation</button>
</div>
</div>



    </>
  );
};

export default Navbar;
