import React from "react";
import { useStateValue } from "../StateProvider";

function Product({ id, title, info, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch item into data layer(dispatch is like a gun)

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        info: info,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <p className="product__id">{id}</p>
      <p className="product__title">{title}</p>
      <p className="product__info">{info}</p>
      <img src="" className="product__img" src={image} />
      <p className="product__price">
        <small>Rs.</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐️</p>
          ))}
      </div>
      <button onClick={addToBasket}> Buy It </button>
    </div>
  );
}

export default Product;
