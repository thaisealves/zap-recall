//for when the card is opened
import turn from "../../assets/img/Vector.svg"
import {useState} from "react"
import "./OpenedCard.css"
export default function OpenedCard({ question, answer, ind }) {
    const [isCardClosed, setIsCardClosed] = useState(true)
    const [questionContent, setQuestionContent] = useState(true)
    const [icon, setIcon] = useState("play-outline")
    const [classIcon, setClassIcon] = useState("md hydrated")
    const [classQuestion, setClassQuestion] = useState("questionBtn btn")
    let content;
    if (isCardClosed) {
        content = 
        <div key={ind} className={classQuestion}>
            Pergunta {ind+1}
            <ion-icon name={icon} className={classIcon} onClick={cardHandle}></ion-icon>
        </div>
    }
    else{
    questionContent ?
        content =
        <div className="card-question opened-card btn">
            {question}
            <img className="turning" src={turn} alt="turning card" onClick={turningHandle} />
        </div> :
        content =
        <div className="card-answer opened-card btn">
            {answer}
            <div className="buttons">
                <button onClick={()=>answered("incorrect")} className="incorrect">Não lembrei</button>
                <button onClick={()=>answered("almost")} className="almost">Quase não lembrei</button>
                <button onClick={()=>answered("correct")} className="correct">Zap!</button>
            </div>
        </div>
    }
    return (
        <>
            {content}
        </>

    )
    function turningHandle() {
        setQuestionContent(false)
    }
    function cardHandle() {
        setIsCardClosed(false);
    }
    function answered(answer){
        setIsCardClosed(true);
        if (answer === "correct"){
            setIcon("checkmark-circle")
            setClassIcon("correct md hydrated")
            setClassQuestion("correct questionBtn btn")
        }
        if (answer === "almost"){
            setIcon("help-circle")
            setClassIcon("almost md hydrated")
            setClassQuestion("almost questionBtn btn")
        }
        if (answer === "incorrect"){
            setIcon("close-circle")
            setClassIcon("incorrect md hydrated")
            setClassQuestion("incorrect questionBtn btn")
        }
    }
}
