import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="gallery mt-5">
        <div class="container">
          <div class="row">
          <h1 className="text-center mt-5">Some photos from Our Restaurent</h1>
            <div class="col mt-5">
              <img
                src="https://media.istockphoto.com/photos/salad-ingredients-flying-through-the-air-landing-in-a-bowl-picture-id1151020167?k=20&m=1151020167&s=612x612&w=0&h=BXRkPrGbc7QTfGOxyJ-oTua_PiWlpsAQTvidqp8ORFA="
                class="img-fluid"
                alt="..."
              />
            </div>
            <div class="col mt-5">
              <img
                src="https://images.unsplash.com/photo-1589227365423-d87e646beaac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80"
                class="img-fluid"
                alt="..."
              />
            </div>
            <div class="col mt-5">
              <img
                src="https://i.pinimg.com/736x/f8/29/d9/f829d9a23a65d3bd633d3739003a2566.jpg"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="container">
  <div class="row">
    <div class="col">
    <img src="https://b.zmtcdn.com/data/pictures/2/2201222/4e400a2aa6cd973ff5a1697871ec4b39_featured_v2.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="col">
    <img src="https://b.zmtcdn.com/data/pictures/3/18967613/037c744114ad1e352cf72b5bded43dee.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="col">
    <img src="https://emmaloufenton.com/wp-content/uploads/2020/10/Toque-de-queda-052-1024x683.jpg" class="img-fluid" alt="..."/>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Gallery;
