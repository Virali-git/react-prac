import React from "react";
import Subtotal from "./Subtotal";
//import threeWinePicture from "../images/wine-three-photos-banner.jpeg";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

//import three-picture-wine from "../images/wine-three-photos-banner.jpeg";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <div className="checkout__left">
              <img src="/images/wine-three-photos-banner.jpeg" alt="" />
              <h3> Hello {user?.email}</h3>
              <h2 className="checkout__title">Your wining Basket</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  info={item.info}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="col-5">
            <div className="checkout__right">
              <Subtotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
