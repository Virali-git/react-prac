import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="container-fluid banner__image__wrapper">
        <div className="row">
          <div className="col-12">
            <img
              alt="banner"
              className="home__image"
              src="/images/wine-black-banner.jpeg"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid product__list__wrapper">
        <div className="row product__row">
          <div className="col-6">
            <Product
              title="Rasa"
              image="/images/sula-vineyard-sauvignon.png"
              info="lorem lenom vare waghn fon"
              price={3000}
              rating={5}
            />
          </div>
          <div className="col-6">
            <Product
              title="Chenin Blanc"
              image="/images/sula-vineyard-sauvignon.png"
              info="lorem lenom vare waghn fon"
              price={2000}
              rating={3}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid product__list__wrapper">
        <div className="row product__row">
          <div className="col-4">
            {" "}
            <Product
              title="Dindori"
              info="lorem lenom vare waghn fon"
              image="/images/sula-vineyard-sauvignon.png"
              price={4000}
              rating={5}
            />
          </div>
          <div className="col-4">
            {" "}
            <Product
              title="Sauvignon"
              info="lorem lenom vare waghn fon"
              image="/images/sula-vineyard-sauvignon.png"
              price={8000}
              rating={5}
            />
          </div>
          <div className="col-4">
            {" "}
            <Product
              title="Trapicalo"
              info="lorem lenom vare waghn fon"
              image="/images/sula-vineyard-sauvignon.png"
              price={4000}
              rating={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
