import React from "react";

const Review = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <h1 className="text-center mt-5">What they are saying about us</h1>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div class="row text-center mt-5 mb-5">
                <div class="col"  id="rev">
                  <figure class="text-center">
                    <blockquote class="blockquote mt-5 mb-5">
                      <p>
                        
                        I liked how the food came out quickly and the servers
                        were really kind . I liked my hangover burger a lot since it was
                        so savory and a huge portion size. The Belgian waffle
                        was super yummy too even though it was simple. I also
                        liked the fries that came with the dish.
                      </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                     Oscar Flores
                      </figcaption>
                  </figure>
                </div>
                <div class="col ms-5"  id="rev">
                  <figure class="text-center">
                    <blockquote class="blockquote mt-5 mb-5">
                      <p>
                        We went to the grand opening tonight. The atmosphere is
                        great, awesome smell of wood fire from the pizza oven,
                        beautifully crafted cocktails, food was incredible and
                        the staff was very friendly. we will definitely be
                        returning to try some of the other items on the menu.
                      </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                     Fashion SF
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div class="row text-center mt-5 mb-5">
                <div class="col"  id="rev">
                  <figure class="text-center">
                    <blockquote class="blockquote mt-5 mb-5">
                      <p>
                        This place is a neighborhood gem! It has great bar
                        ambiance, bay bridge views , outside heated seating,
                        firepits. MANY vegan 🌱 vegetarian and gluten free
                        options. The food tastes amazing - fresh, colorful,
                        spicy, flavorful . 👏🏻👏🏻
                      </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                     Oscar Flawrs
                    </figcaption>
                  </figure>
                </div>
                <div class="col ms-5"  id="rev">
                  <figure class="text-center">
                    <blockquote class="blockquote mt-5 mb-5">
                      <p>
                       
                        Excellent food and ambiance in spectacular setting . The
                        executive chef is very friendly and warm with all the
                        patrons and shares his global culinary experience and
                        joy for creativity in the kitchen . A must visit when in
                        the SF waterfront!
                      </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                     Fashion Sf
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Review;
