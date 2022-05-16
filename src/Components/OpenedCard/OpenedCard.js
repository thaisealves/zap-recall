//for when the card is opened
import turn from "../../assets/img/Vector.svg"
import {useState} from "react"
import "./OpenedCard.css"
export default function OpenedCard({ question, answer, ind }) {
    const [isCardOpen, setIsCardOpen] = useState(true)
    const [cardContent, setCardContent] = useState("question")
    let content;
    if (isCardOpen) {
        content = 
        <div key={ind} className="questionBtn btn">
            Pergunta {ind+1}
            <ion-icon name="play-outline" onClick={CardHandle}></ion-icon>
        </div>
    }
    else{
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
    }
    return (
        <>
            {content}
        </>

    )
    function turningHandle() {
        setCardContent("answer")
    }
    function CardHandle() {
        setIsCardOpen(false);
    }
}
