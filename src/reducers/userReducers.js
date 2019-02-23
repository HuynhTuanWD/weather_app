// CART REDUCERS
export function userReducers(state={user:{}}, action) {
  switch(action.type){
    case "GET_USER":
    return{...state,
      user:action.payload
    }
    break;
  }
  return state
}

// CALCULATE TOTALS
export function totals(payloadArr){

  const totalAmount = payloadArr.map(function(cartArr){
    return cartArr.price * cartArr.quantity;
  }).reduce(function(a, b) {
    return a + b;
  }, 0); //start summing from index0


  const totalQty = payloadArr.map(function(qty){
    return qty.quantity;
  }).reduce(function(a, b) {
    return a + b;
  }, 0);

  return {amount:totalAmount.toFixed(2), qty:totalQty}
}
