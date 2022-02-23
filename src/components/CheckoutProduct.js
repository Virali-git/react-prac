import React from "react";
import { useStateValue } from "../StateProvider";


function CheckoutProduct({ id, title, info, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct container">
      <div className="row">
        <div className="col-6  checkoutProduct__img ">
          <img src={image} />
        </div>
        <div className="col-6 checkoutProduct__information">
          <div className="checkoutProduct__information__title">{title}</div>
          <div className="checkoutProduct__information__details">{info}</div>
          <div className="checkoutProduct__information__price">
            <small>Rs.</small>
            <strong>{price}</strong>
          </div>
          <div className="checkoutProduct__information__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                // (_,i is not needed)
                <p>⭐️</p>
              ))}
          </div>
          <div className="checkoutProduct__information__button">
            <button onClick={removeFromBasket}>Remove from basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
