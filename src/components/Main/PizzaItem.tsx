import React from "react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IPizzaItem } from "../../models/pizza"
import PizzaIngridients from "./PizzaIngridients"
import PizzaInputs from "./PizzaInputs"
import "./styles/PizzaItem.scss"

const PizzaItem: FC<IPizzaItem> = ({
    id,
    name,
    cost,
    weight,
    ingridients,
    img,
}) => {
    const navigate = useNavigate()

    const pizzaNavigateHandler = () => {
        navigate(`/item/${id}`)
    }

    return (
        <div className="pizza-item">
            <img
                onClick={pizzaNavigateHandler}
                src={`${process.env.PUBLIC_URL}/img/pizza-items/${img}`}
                alt="Піца"
                className="pizza-item__img"
                draggable={false}
            />

            <h1 className="pizza-item__name" onClick={pizzaNavigateHandler}>
                {name}
            </h1>

            <span className="pizza-item__open-ingridients">Склад</span>
            <PizzaIngridients id={id} ingridients={ingridients} />

            <PizzaInputs
                id={id}
                name={name}
                cost={cost}
                weight={weight}
                img={img}
            />
        </div>
    )
}

export default React.memo(PizzaItem)
