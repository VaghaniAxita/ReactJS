import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    someState: someReducer,  
  },
});

export default store;
