import logo from "../../assets/img/zapLogo.png"
import "./Cards.css"
import {useState} from "react"
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
    let enumQuestions = []; /* enumering the cards, first page from questions */
    const [complete, SetComplete] = useState(0) /* seeing how many cards where answered */

    for (let i = 0; i < QUESTIONS_NUM; i++) {
        enumQuestions.push(`Pergunta ${i + 1}`);
    }
    // { enumQuestions.map((element, index) => <ClosedBtn key={index} element={element} index={index} />) }

    // function ClosedBtn({element, index}) {
    //     // const [isCardOpen, setIsCardOpen] = useState("closed") /* seeing if the card is closed or opened */
    //     let questionCard;  /* set the content of the card depending on status */
    //     isCardOpen === "closed" ? /* what's the status of the card? */
    //         questionCard =
    //         (<div key={index} className="questionBtn btn">
    //             {element}
    //             <ion-icon name="play-outline" onClick={CardHandle}></ion-icon>
    //         </div>) :
    //         questionCard = (cards.map((elem, ind) => <OpenedCard question={elem.question} answer={elem.answer} key={ind} ind={ind} />));

    //     return (
    //         <>
    //             {questionCard}
    //         </>
    //     )

    //     function CardHandle(index) {
    //         setIsCardOpen("opened");
    //     }
    // }

    return (
        <div className="questions">
            <div className="logoHeader">
                <img src={logo} alt="ZapRecall Logo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="question">
            {/* { enumQuestions.map((element, index) => <ClosedBtn key={element.question} element={element} index={index} />) } */}
           { cards.map((elem, ind)=> <OpenedCard question={elem.question} answer={elem.answer} ind={ind} key={ind}/> )}
            </div>
            <footer>
                {complete}/{QUESTIONS_NUM} CONCLUÍDOS!
            </footer>
        </div>
    )

}


