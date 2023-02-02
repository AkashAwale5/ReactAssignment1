import Question from "./Question";
import "./Quiz.css";


const Questions = (props) => {
    const { questions } = props;
    const len = Object.keys(questions).length

    const onClickHandle = () => {
        alert("Submitted Successfully !!!");
    };
    return (
        <div className="quizfull">
            <h1>Quiz-App</h1>
            <div className="quiz_totalque">
                <h2>Total Que: {len}</h2>
                <h2 className="quiz__time">Time:10 Min</h2></div>

            {questions.map((question) => {
                return <Question key={question.id} question={question} />;
            })}
            <div>
                <button className="quiz_submitbtn" onClick={onClickHandle}>Submit</button>
            </div>
        </div>
    );
};

export default Questions;