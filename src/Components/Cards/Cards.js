import logo from "../../assets/img/zapLogo.png"
import turn from "../../assets/img/Vector.svg"
import "./Cards.css"
import React from "react"

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
    let enumQuestions = []; /* enumering the cards, first page from questions */
    const [complete, SetComplete] = React.useState(0) /* seeing how many cards where answered */
    // const [selectedCard, setSelectedCard] = React.useState("");  /* the card that we clicked */

    for (let i = 0; i < QUESTIONS_NUM; i++) {
        enumQuestions.push(`Pergunta ${i + 1}`);
    }
    // { enumQuestions.map((element, index) => <ClosedBtn key={index} element={element} index={index} />) }


    function ClosedBtn({element, index}) {
        const [isCardOpen, setIsCardOpen] = React.useState("closed") /* seeing if the card is closed or opened */
        let questionCard;  /* set the content of the card depending on status */
        isCardOpen === "closed" ? /* what's the status of the card? */
            questionCard =
            (<div key={index} className="questionBtn btn">
                {element}
                <ion-icon name="play-outline" onClick={CardHandle}></ion-icon>
            </div>) :
            questionCard = (cards.map((elem, index) => <OpenedCard question={elem.question} answer={elem.answer} key={index} index={index} />));

        return (
            <>
                {questionCard}
            </>
        )

        function CardHandle(index) {
            setIsCardOpen("opened");
        }
    }

    return (
        <div className="questions">
            <div className="logoHeader">
                <img src={logo} alt="ZapRecall Logo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="question">
            { enumQuestions.map((element, index) => <ClosedBtn key={index} element={element} index={index} />) }
            </div>
            <footer>
                {complete}/{QUESTIONS_NUM} CONCLUÍDOS!
            </footer>
        </div>
    )

}


function OpenedCard({ question, answer }) {
    const [cardContent, setCardContent] = React.useState("question")
    let content;
    cardContent === "question" ?
        content =
        <div className="card-question opened-card btn">
            {question}
            <img className="turning" src={turn} alt="turning card" onClick={turningHandle} />
        </div> :
        content =
        <div className="card-answer opened-card btn">
            {answer}
            <div className="buttons">
                <button className="incorrect">Não lembrei</button>
                <button className="almost">Quase não lembrei</button>
                <button className="correct">Zap!</button>
            </div>
        </div>
    return (
        <>
            {content}
        </>

    )
    function turningHandle() {
        setCardContent("answer")
    }
}
