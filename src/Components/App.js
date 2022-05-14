import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../assets/css/reset.css"
import "../assets/css/styles.css"
import Init from "./Init/Init"
import Questions from "./Questions/Questions"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Init/>}/>
                <Route path="/perguntas" element={<Questions/>}/>
            </Routes>
        </BrowserRouter>
    )
}