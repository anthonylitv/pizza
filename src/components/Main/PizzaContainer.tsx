import "./styles/PizzaContainer.scss"
import { useAppSelector } from "../../hooks/redux"
import pizzaApi from "../../services/pizzaApi"
import PizzaItem from "./PizzaItem"
import SkeletonPizzaItem from "../Skeleton/SkeletonPizzaItem"
import searchEmptyPizzas from "../../hooks/searchEmptyPizzas"
import { sortVariants } from "./Sorter"

const PizzaContainer = () => {
    const { data, isLoading, isError } = pizzaApi.useFetchPizzaQuery("")

    const searchValue = useAppSelector((state) =>
        state.pizzaSlice.searchValue.trim().toLowerCase()
    )

    const currentKategory = useAppSelector((state) =>
        state.pizzaSlice.currentKategory.toLowerCase()
    )

    const currentSort = useAppSelector((state) => state.pizzaSlice.currentSort)

    let pizzas = data?.assort || []
    let pizzasJSX

    const filteredPizzasCopy = searchEmptyPizzas(searchValue, pizzas)

    if (currentKategory !== "всі") {
        pizzas = pizzas?.filter((item) =>
            item.ingridients.toLowerCase().includes(currentKategory)
        )
    }

    if (searchValue.length !== 0 && filteredPizzasCopy.length > 0) {
        pizzas = filteredPizzasCopy
    }

    if (currentSort === sortVariants[1]) {
        pizzas = [...pizzas]?.sort((a, b) => a.cost[0] - b.cost[0])
    } else if (currentSort === sortVariants[2]) {
        pizzas = [...pizzas]?.sort((a, b) => b.cost[0] - a.cost[0])
    }

    if (pizzas.length > 0) {
        pizzasJSX = pizzas?.map((item) => (
            <PizzaItem
                key={item.id}
                id={item.id}
                name={item.name}
                kategory={item.kategory}
                cost={item.cost}
                weight={item.weight}
                ingridients={item.ingridients}
                img={item.img}
            />
        ))
    }

    return (
        <div className="pizza-container">
            {isLoading
                ? [...new Array(8)].map((_, index) => (
                      <SkeletonPizzaItem key={index} />
                  ))
                : pizzasJSX}
        </div>
    )
}

export default PizzaContainer
