import { Route, Routes } from "react-router-dom"
import App from "./App"
import Detail from "./components/DetailProject"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    )
}
export default Router
