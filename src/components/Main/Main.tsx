import KategoryContainer from "./KategoryContainer"
import PizzaContainer from "./PizzaContainer"
import Sorter from "./Sorter"
import "./styles/Main.scss"

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="kategories-sorter">
                    <KategoryContainer />
                    <Sorter />
                </div>
                <PizzaContainer />
            </div>
        </section>
    )
}

export default Main
