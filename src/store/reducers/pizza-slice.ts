import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IPizzaState {
    searchValue: string
    currentKategory: string
    currentSort: string
}

const initialState: IPizzaState = {
    searchValue: sessionStorage.getItem("searchValue") || "",
    currentKategory: sessionStorage.getItem("currentKategory") || "Всі",
    currentSort: sessionStorage.getItem("currentSort") || "За популярністю",
}

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setKategory(state, action: PayloadAction<string>) {
            state.currentKategory = action.payload

            sessionStorage.setItem("currentKategory", action.payload)
        },

        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload

            sessionStorage.setItem("searchValue", action.payload)
        },

        setSort(state, action: PayloadAction<string>) {
            state.currentSort = action.payload

            sessionStorage.setItem("currentSort", action.payload)
        },
    },
})

export default pizzaSlice
