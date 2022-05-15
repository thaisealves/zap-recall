import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../assets/css/reset.css"
import "../assets/css/styles.css"
import Init from "./Init/Init"
import Cards from "./Cards/Cards"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Init/>}/>
                <Route path="/perguntas" element={<Cards/>}/>
            </Routes>
        </BrowserRouter>
    )
}