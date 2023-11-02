import { configureStore, createSlice } from '@reduxjs/toolkit'

let productInfo = createSlice({
  name : 'productInfo',
  initialState : [
    {id : 0, title : "White and Black", content : "Born in France", price : 120000},
    {id : 1, title : "Red Knit", content : "Born in Seoul", price : 110000},
    {id : 2, title : "Grey Yordan", content : "Born in the States", price : 130000},
    {id : 3, title : "Flowey", content : "only 5 inches", price : 120000},
    {id : 4, title : "Baby shoes", content : "for less than 6", price : 120000},
    {id : 5, title : "Red Herring", content : "Born in France", price : 120000}
  ],
  reducers : {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  }
});

let user = createSlice({
  name : 'user',
  initialState : 'kim'
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
    {id : 5, name : 'Kim Tea', count : 11}
  ],
  reducers : {
    addCount(state, action){
      console.log(state, action);
      state[action.payload].count++
    },
    msCount(state, action){
      state[action.payload].count--
    }
  }
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer,
    productInfo : productInfo.reducer
   }
}) 

let { actions: { addCount, msCount }, reducer } = cart;

export { addCount, msCount , productInfo };