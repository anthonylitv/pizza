import "./App.scss"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Cart from "./pages/Cart"
import Main from "./pages/Main"
import OutletRoutes from "./pages/OutletRoutes"
import { useEffect } from "react"
import NavigatePizza from "./components/NavigatePizza/NavigatePizza"
import pizzaApi from "./services/pizzaApi"

function App() {
    const { isError } = pizzaApi.useFetchPizzaQuery("")
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            {!isError ? (
                <div className="app" id="app">
                    <Routes>
                        <Route path="/" element={<OutletRoutes />}>
                            <Route index element={<Main />} />
                            <Route path="cart" element={<Cart />} />
                            <Route
                                path="item/:id"
                                element={<NavigatePizza />}
                            />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Route>
                    </Routes>
                </div>
            ) : (
                <h1>Помилка з'єднання з сервером</h1>
            )}
        </>
    )
}

export default App
