export interface IPizzaItem {
    id: number
    name: string
    kategory: string
    cost: number[]
    weight: number[]
    ingridients: string
    img: string
}

export interface IPizzaKategory {
    id: number
    kategory: string
}

export interface IPizza {
    kategories: IPizzaKategory[]
    assort: IPizzaItem[]
}

export interface ICartItem {
    id: string
    name: string
    choose: string
    cost: number
    amount: number
    img: string
    totalCost: number
}

export type CartItemProps = Omit<ICartItem, "amount" | "totalCost">
