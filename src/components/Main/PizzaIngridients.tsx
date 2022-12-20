import "./styles/PizzaIngridients.scss"
import { FC } from "react"
import React from "react"

interface IPizzaIngridientsProps {
    id: number
    ingridients: string
}

const PizzaIngridients: FC<IPizzaIngridientsProps> = ({ ingridients, id }) => {
    const ingridientsJSX = ingridients.split(", ").map((item) => {
        return (
            <li key={`${item}=${id}`}>
                {item[0].toUpperCase() + item.slice(1)}
            </li>
        )
    })

    return (
        <>
            <div className="pizza-item__ingridients">
                <ul className="pizza-item__ingridients-overlay">
                    {ingridientsJSX}
                </ul>
            </div>
        </>
    )
}

export default React.memo(PizzaIngridients)
