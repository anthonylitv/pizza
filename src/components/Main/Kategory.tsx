import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import pizzaSlice from "../../store/reducers/pizza-slice"
import "./styles/Kategory.scss"

interface IKategoryProps {
    id: number
    kategory: string
}

const Kategory: FC<IKategoryProps> = ({ id, kategory }) => {
    const dispatch = useAppDispatch()

    const currentKategory = useAppSelector(
        (state) => state.pizzaSlice.currentKategory
    )

    const kategoryChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(pizzaSlice.actions.setKategory(event.target.value))
    }

    return (
        <>
            <input
                type="radio"
                onChange={kategoryChangeHandler}
                className="kategory-input"
                checked={kategory === currentKategory}
                id={id.toString()}
                name="kategory"
                value={kategory}
            />
            <label className="kategory-label" htmlFor={id.toString()}>
                {kategory}
            </label>
        </>
    )
}

export default Kategory
