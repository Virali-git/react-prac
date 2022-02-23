//think reducer as a data layer(written in your notes)
export const intialState = {
  basket: [],
  user: null,
};

//Selector: highly used in production environment
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//react context API and Redux are not the same thing but are same pattern//basically global store for your application
//reduce just listens to what you add and what you remove
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket]; //copy insude newBasket
      if (index >= 0) {
        newBasket.splice(index, 1); //imp (remove from the array-- remember [0,1,2])
      } else {
        console.warn(
          `Cant remove product (id : ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state, //current state
        basket: newBasket, //now basket will be newbasket 
      };
    case "SET_USER":
    return {
      ...state,
      user: action.user
    };
    default:
      return state;
  }
};

export default reducer;
//state: state of the application || action: add to the basket or remove from the basket
