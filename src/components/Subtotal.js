import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";


function Subtotal() {
  const [{ basket } , dispatch] = useStateValue(); //pull from data layer
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework */}
              Subtotal({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}  //amount //homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
