import logo from "../../assets/img/zapLogo.png"
import "./Cards.css"
import { useState } from "react"
import OpenedCard from "../OpenedCard/OpenedCard"
/* data from the cards */
const cards = [
    { question: "O que é JSX?", answer: " Uma extensão de linguagem do JavaScript" },
    { question: " O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes " },
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]
cards.sort(() => Math.random() - 0.5); /* getting the cards sorted */

export default function Cards() {
    const QUESTIONS_NUM = 8; /* number of card on a deck */
    const [complete, setComplete] = useState(0); /* seeing how many cards where answered */
    const [answerIcons, setAnswerIcons] = useState([]);
    const [finalText, setFinalText] = useState("")
    const [restart, setRestart] = useState("")
    return (
        <div className="questions">
            <div className="logoHeader">
                <img src={logo} alt="ZapRecall Logo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="question">
                {cards.map((elem, ind) => <OpenedCard question={elem.question} answer={elem.answer} ind={ind} key={ind} answerIcons={answerIcons} setAnswerIcons={setAnswerIcons} complete={complete} setComplete={setComplete} setFinalText={setFinalText} questionNum={QUESTIONS_NUM} setRestart={setRestart} />)}
            </div>
            <footer>
                {finalText}
                <div>
                    {complete}/{QUESTIONS_NUM} CONCLUÍDOS!
                </div>
                <div className="answered-icons">
                    {answerIcons}
                </div>
                {restart}
            </footer>
        </div>
    )

}


