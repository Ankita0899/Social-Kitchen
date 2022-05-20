import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-center mt-5">The art of crafting and serving</h1>
      <div className="paragraph text-center ms-5 me-5">
        <p className="ms-5 me-5">
          There is no love sincerer than the love of good food.
        </p>
        <p className="ms-5 me-5">
          The Socialite with an array of artistically crafted food and charming
          ambience arrives at one of the most prestigious culinary scenes in San
          Francisco’s South Bay to create beautiful, lasting memories.
        </p>
        <p className="ms-5 me-5">
          We strive to achieve a delicate balance of traditional flavors with a
          modern approach to come up to everyone’s palette and unique tastes.
          Whether it’s business meetings, first dates to fall in love over
          dinner, or friends catching up – we assure warm, delightful service
          every time.
        </p>
      </div>
      <div className="container-fluid" id="back-img">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6 mt-5">
              <p className="we mt-5">We are----</p>
              <h1>Exquisite & Authentic</h1>
              <p className="white">
                The foundation of San Francisco dining has seen various
                transitions and trends over the time. The one thing that has
                stayed constant is that food is still our common ground, a
                universal experience that really has the power to bring everyone
                together at a table.
              </p>
              <p className="white">
                We present culinary experience that captures the essence of
                local flavors, wholesome ingredients, fresh produce and choicest
                of the wines. Our kitchen features a live fire where grilled
                meats, seafood and vegetarian delights are brought to finish
                from scratch. Paired with our finest of the wine collection, it
                makes for an indulgent dining experience perfect for any
                occasion.
              </p>
            </div>
            <div class="col-md-6 mt-5 mb-5">
              <img
                src="https://i.pinimg.com/736x/9a/de/71/9ade7195f59b8a25fc2add09f8a25a23.jpg"
                id="side"
                class="img-fluid mt-5 ms-2"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
