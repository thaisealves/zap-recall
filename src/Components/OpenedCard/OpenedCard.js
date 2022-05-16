//for when the card is opened
import turn from "../../assets/img/Vector.svg"
import { useState } from "react"
import "./OpenedCard.css"
export default function OpenedCard({ question, answer, ind, setComplete, complete, answerIcons, setAnswerIcons }) {
    const [isCardClosed, setIsCardClosed] = useState(true)
    const [questionContent, setQuestionContent] = useState(true)
    const [icon, setIcon] = useState(<ion-icon name="play-outline" onClick={cardHandle}></ion-icon>)
    const [classQuestion, setClassQuestion] = useState("questionBtn btn")

    let content;
    if (isCardClosed) {
        content =
            <div key={ind} className={classQuestion}>
                Pergunta {ind + 1}
                {icon}
            </div>
    }
    else {
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
                    <button onClick={() => answered("incorrect")} className="incorrect">Não lembrei</button>
                    <button onClick={() => answered("almost")} className="almost">Quase não lembrei</button>
                    <button onClick={() => answered("correct")} className="correct">Zap!</button>
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
    function answered(answer) {
        setIsCardClosed(true);
        setComplete(complete + 1)
        if (answer === "correct") {
            setIcon(<ion-icon name="checkmark-circle"></ion-icon>)
            setClassQuestion("correct questionBtn btn")
            setAnswerIcons([...answerIcons, <ion-icon name="checkmark-circle"></ion-icon>])
        }
        if (answer === "almost") {
            setIcon(<ion-icon name="help-circle"></ion-icon>)
            setClassQuestion("almost questionBtn btn")
            setAnswerIcons([...answerIcons, <ion-icon name="help-circle"></ion-icon>])
        }
        if (answer === "incorrect") {
            setIcon(<ion-icon name="close-circle"></ion-icon>)
            setClassQuestion("incorrect questionBtn btn")
            setAnswerIcons([...answerIcons, <ion-icon name="close-circle"></ion-icon>])
        }
    
    }
}
