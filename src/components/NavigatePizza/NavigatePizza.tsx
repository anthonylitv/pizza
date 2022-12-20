import "./styles/NavigatePizza.scss"
import { useParams } from "react-router-dom"
import pizzaApi from "../../services/pizzaApi"
import PizzaInputs from "../Main/PizzaInputs"

type NavigatePizzaParams = {
    id: string
}

const NavigatePizza = () => {
    const { id } = useParams<NavigatePizzaParams>()

    const { data } = pizzaApi.useFetchPizzaQuery("")

    const currentItemPizza = data?.assort.find(
        (item) => item.id.toString() === id
    )

    return (
        <div className="navigate-pizza">
            <div className="container">
                <img
                    src={`${process.env.PUBLIC_URL}/img/pizza-items/${
                        currentItemPizza?.img || ""
                    }`}
                    alt=""
                    className="navigate-pizza__img"
                />

                <div className="navigate-pizza__information">
                    <h1 className="navigate-pizza__name">
                        {currentItemPizza?.name}
                    </h1>

                    <p className="navigate-pizza_ingridients">
                        Склад: {currentItemPizza?.ingridients}
                    </p>

                    {currentItemPizza && (
                        <PizzaInputs
                            id={currentItemPizza.id}
                            name={currentItemPizza.name}
                            cost={currentItemPizza.cost}
                            weight={currentItemPizza.weight}
                            img={currentItemPizza.img}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavigatePizza
