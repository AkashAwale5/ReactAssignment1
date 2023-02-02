import { useState } from "react";
import "./Question.css";
const TestQue = (props) => {

    const [option1, setoption1] = useState(props.question.option1);
    const onhandle1 = () => {
        setoption1("selected option1");
    }
    
    return (
        <div className="Question-item">
            <div className="qustion-item">
                <h1><span>Q{props.question.id}.</span>
                    {props.question.question}</h1>
            </div>
            <div>
                <div className="question__option" onClick={onhandle1}><span>1.</span>{option1}</div>
                <div className="question__option" ><span>2.</span>{props.question.option2}</div>
                <div className="question__option" ><span>3.</span>{props.question.option3}</div>
                <div className="question__option" ><span>4.</span>{props.question.option4}</div>
                <h1 className="question_page">{props.question.id} of 3</h1>
                <hr />
            </div>
        </div>

    );
};

export default TestQue;