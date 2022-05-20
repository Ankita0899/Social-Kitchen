import React from 'react'
function Buffet() {

    var a = document.getElementById("buffet");
    a.style.display = "block";
    var b = document.getElementById("break");
    b.style.display = "none";
    var c = document.getElementById("lunch");
    c.style.display = "none";
    var d = document.getElementById("chef");
    d.style.display = "none";
    var e = document.getElementById("desert");
    e.style.display = "none";
    var f = document.getElementById("drink");
    f.style.display = "none";
  }

  function Breakfast() {

    var a = document.getElementById("buffet");
    a.style.display = "none";
    var b = document.getElementById("break");
    b.style.display = "block";
    var c = document.getElementById("lunch");
    c.style.display = "none";
    var d = document.getElementById("chef");
    d.style.display = "none";
    var e = document.getElementById("desert");
    e.style.display = "none";
    var f = document.getElementById("drink");
    f.style.display = "none";
  }

  function Lunch() {

    var a = document.getElementById("buffet");
    a.style.display = "none";
    var b = document.getElementById("break");
    b.style.display = "none";
    var c = document.getElementById("lunch");
    c.style.display = "block";
    var d = document.getElementById("chef");
    d.style.display = "none";
    var e = document.getElementById("desert");
    e.style.display = "none";
    var f = document.getElementById("drink");
    f.style.display = "none";
  }

  function Chef() {

    var a = document.getElementById("buffet");
    a.style.display = "none";
    var b = document.getElementById("break");
    b.style.display = "none";
    var c = document.getElementById("lunch");
    c.style.display = "none";
    var d = document.getElementById("chef");
    d.style.display = "block";
    var e = document.getElementById("desert");
    e.style.display = "none";
    var f = document.getElementById("drink");
    f.style.display = "none";
  }

  function Desert() {

    var a = document.getElementById("buffet");
    a.style.display = "none";
    var b = document.getElementById("break");
    b.style.display = "none";
    var c = document.getElementById("lunch");
    c.style.display = "none";
    var d = document.getElementById("chef");
    d.style.display = "none";
    var e = document.getElementById("desert");
    e.style.display = "block";
    var f = document.getElementById("drink");
    f.style.display = "none";
  }

  function Drinks() {

    var a = document.getElementById("buffet");
    a.style.display = "none";
    var b = document.getElementById("break");
    b.style.display = "none";
    var c = document.getElementById("lunch");
    c.style.display = "none";
    var d = document.getElementById("chef");
    d.style.display = "none";
    var e = document.getElementById("desert");
    e.style.display = "none";
    var f = document.getElementById("drink");
    f.style.display = "block";
  }


const Menu = () => {
  return (
    <>
      <h1 className='text-center mt-5'>Food & Drinks</h1>
      <div className="button-m text-center mt-4">
<button onClick={Buffet} type="button" class="btn mb-5 ps-4 pe-4">Buffet</button>
<button onClick={Breakfast} type="button" class="btn ms-2 mb-5 ps-4 pe-4">Breakfast</button>
<button onClick={Lunch} type="button" class="btn ms-2 mb-5 ps-4 pe-4">Lunch & Dinner</button>
<button onClick={Chef} type="button" class="btn ms-2 mb-5 ps-4 pe-4">Chef's Special</button>
<button onClick={Desert} type="button" class="btn ms-2 mb-5 ps-4 pe-4">Desert</button>
<button onClick={Drinks} type="button" class="btn ms-2 mb-5 ps-4 pe-4">Drinks</button>
</div>
<div className='Buffet text-center' id='buffet'>

<h3>Breakfast Buffet</h3>
<label>Timing: 07:00 AM - 10:30 AM <br/>
<span>Price:1500</span> </label>

{/* <h3 className='mt-3'>Lunch Buffet</h3>
<label>Timing: 12:30 PM - 03:00 PM <br/>
<span>Price:1650</span> </label>

<h3 className='mt-3'>Sunday Brunch</h3>
<label>Timing: 01:00 PM - 03:30 PM <br/>
<span>Price:2000</span> </label>

<h3 className='mt-3'>Dinner Buffet</h3>
<label>Timing: 07:00 PM - 10:30 PM <br/>
<span>Price:1750</span> </label>

<h3 className='mt-3'>Soups, Salads & Deserts</h3>
<label><span>Price:1650</span></label> */}

</div>


<div className='Breakfast text-center mt-5' id='break'>

<h3>Idli</h3>
<label>Steamed rice and lentil cake, a south Indian delicay, served with sambhar and chutneys <br/>
<span>Price:650</span> </label>

{/* <h3 className='mt-3'>Dosa(Plain/Masala)</h3>
<label>South Indian crisp rice and lentil pancake, served with sabhar and chutneys<br/>
<span>Price:700</span> </label>

<h3 className='mt-3'>Egg to order</h3>
<label>Your choice of eggs: poached, scrambled, omelette or fried, served with potato roesti and grilled tomato topped with parmesan and parsely<br/>
<span>Price:700</span> </label> */}

</div>


<div className='Lunch text-center mt-5' id='lunch'>

<h2><u>Soups</u></h2>
<h3>Mushroom Cappuccino</h3>
<label>Porchini dust, toasted almonds<br/>
<span>Price:600</span> </label>



</div>


<div className='Chef text-center mt-5' id='chef'>

<h2><u>Pizza</u></h2>
<h3>Pizza Margherita</h3>
<label>Classic combination of fresh tomato, basil and mozzarella cheese<br/>
<span>Price:875</span> </label>


</div>


<div className='Desert text-center mt-5' id='desert'>

<h2><u>Deserts</u></h2>
<h3>Gulkand Gulab Jamun</h3>
<label>Paan flavoured reduced milk dumplings deep fried and simmered in orange sugar syrup<br/>
<span>Price:550</span> </label>

</div>


<div className='Drink text-center mt-5' id='drink'>

<h2><u>Hot & Cold Beverage</u></h2>
<h3>Smoothie</h3>
<label>Blueberry and avocado/museli and forest honey/ orange and ginger<br/>
<span>Price:450</span> </label>


</div>
<div className="button-v text-center mt-5 mb-5">
<button type="button" class="btn  ps-4 pe-4"> <a href="#" class="link">View All</a> </button>
</div>
    </>
  )
}

export default Menu
