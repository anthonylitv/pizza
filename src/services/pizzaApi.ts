import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPizza } from "../models/pizza"

const pizzaApi = createApi({
    reducerPath: "pizzaApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://react-pizza-68e84-default-rtdb.firebaseio.com/",
    }),
    endpoints: (build) => ({
        fetchPizza: build.query<IPizza, string>({
            query: (params: string) => ({
                url: "pizza.json",
            }),
        }),
    }),
})

export default pizzaApi
