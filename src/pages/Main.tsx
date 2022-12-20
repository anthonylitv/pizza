import KategoryContainer from "../components/Main/KategoryContainer"
import PizzaContainer from "../components/Main/PizzaContainer"
import Sorter from "../components/Main/Sorter"
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
