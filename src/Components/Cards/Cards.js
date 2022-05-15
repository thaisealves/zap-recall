import logo from "../../assets/img/zapLogo.png"
import "./Cards.css"
import React from "react"

export default function Cards() {
    const QUESTIONS_NUM = 8; /* number of card on a deck */
    let enumQuestions = []; /* enumering the cards, first page from questions */
    let questionCard; /* set the content of the card depending on status */
    const [complete, SetComplete] = React.useState(0) /* seeing how many cards where answered */
    const [openCard, setOpenCard] = React.useState("closed") /* seeing if the card is closed or opened */

    function CardHandle() {
        setOpenCard("opened")
    }

    function QuestionBtn({ element }) {
        return (
            <div className="questionBtn btn">
                {element}
                <ion-icon name="play-outline" onClick={CardHandle}></ion-icon>
            </div>
        )
    }
    for (let i = 0; i < QUESTIONS_NUM; i++) {
        enumQuestions.push(`Pergunta ${i + 1}`)
    }

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
    cards.sort(() => Math.random() - 0.5);
    openCard === "closed" ?
        questionCard = enumQuestions.map((element, index) => <QuestionBtn key={index} element={element} />) :
        questionCard = cards.map((elem, index) => <OpenCard question={elem.question} answer={elem.answer} key={index} />)

    return (
        <div className="questions">
            <div className="logoHeader">
                <img src={logo} alt="ZapRecall Logo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="question">
                {questionCard}
            </div>
            <footer>
                {complete}/{QUESTIONS_NUM} CONCLUÍDOS!
            </footer>
        </div>
    )



}
function OpenCard({ question, answer }) {
    return (
        <div className="card-question opened-card">
            {question}
        </div>
    )
}
