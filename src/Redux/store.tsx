import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import productsImagesReducer from './features/ProductsImagesSlice';
import categoryReducer from './productsPage/categorySlice';
import paginationReducer from './productsPage/paginationSlice';
import searchReducer from './productsPage/searchSlice';
import { apiSlice } from './features/ApiSlice';
import { reviewReducer } from './Action/Reducer/Review';
import { productReducer } from './Action/Reducer/singleproductSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productsImages: productsImagesReducer,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer,
    reviews: reviewReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
