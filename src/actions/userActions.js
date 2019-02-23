import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading-bar";
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
export function getUser() {
  return dispatch => {
    axios(`https://jsonplaceholder.typicode.com/posts/42`, {
      method: "GET",
      data: {},
      headers: {
        Accept: "application/json"
        //Authorization: localStorage.getItem("token")
      }
    })
      .then(result => {
        if(result){
          dispatch({type:"GET_USER", payload:result.data});
        }
        dispatch(hideLoading());
      })
      .catch(error => {
        dispatch(hideLoading());
        console.log(error);
      });
  };
}
// GET CART
// export function getCart(){
//   return function(dispatch){
//     axios.get('/api/cart')
//      .then(function(response){
//        dispatch({type:"GET_CART", payload:response.data})
//      })
//      .catch(function(err){
//        dispatch({type:"GET_CART_REJECTED", msg:"error when getting the cart from session"})
//      })
//   }
// }
// ADD TO CART
export function addToCart(cart) {
  return function(dispatch) {
    axios
      .post("/api/cart", cart)
      .then(function(response) {
        dispatch({ type: "ADD_TO_CART", payload: response.data });
      })
      .catch(function(err) {
        dispatch({
          type: "ADD_TO_CART_REJECTED",
          msg: "error when adding to the cart"
        });
      });
  };
}
// UPDATE CART
export function updateCart(_id, unit, cart) {
  // Create a copy of the current array of books
  const currentBookToUpdate = cart;
  // Determine at which index in books array is the book to be deleted
  const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
    return book._id === _id;
  });

  const newBookToUpdate = {
    ...currentBookToUpdate[indexToUpdate],
    quantity: currentBookToUpdate[indexToUpdate].quantity + unit
  };

  let cartUpdate = [
    ...currentBookToUpdate.slice(0, indexToUpdate),
    newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)
  ];

  return function(dispatch) {
    axios
      .post("/api/cart", cartUpdate)
      .then(function(response) {
        dispatch({ type: "UPDATE_CART", payload: response.data });
      })
      .catch(function(err) {
        dispatch({
          type: "UPDATE_CART_REJECTED",
          msg: "error when adding to the cart"
        });
      });
  };
}
// DELETE FROM CART
export function deleteCartItem(cart) {
  return function(dispatch) {
    axios
      .post("/api/cart", cart)
      .then(function(response) {
        dispatch({ type: "DELETE_CART_ITEM", payload: response.data });
      })
      .catch(function(err) {
        dispatch({
          type: "DELETE_CART_ITEM_REJECTED",
          msg: "error when deleting an item from the cart"
        });
      });
  };
}
