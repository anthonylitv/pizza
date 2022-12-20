import { combineReducers, configureStore } from "@reduxjs/toolkit"
import pizzaApi from "../services/pizzaApi"
import cartSlice from "./reducers/cart-slice"
import pizzaSlice from "./reducers/pizza-slice"

const rootReducer = combineReducers({
    cartSlice: cartSlice.reducer,
    pizzaSlice: pizzaSlice.reducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
