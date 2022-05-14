import zapLogo from "../../assets/img/zapLogo.png";
import { Link } from "react-router-dom";
import "./Init.css"
export default function Init() {
    return (
        <div className="init">
            <img src={zapLogo} alt="ZapRecall Logo" />
            <h1>ZapRecall</h1>
            <Link to="/perguntas" className="btn">
                Iniciar Recall!
            </Link>
        </div>
    )
}