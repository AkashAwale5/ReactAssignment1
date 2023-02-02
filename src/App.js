
import './App.css';
import Quiz from './components/Quiz';

function App() {
  const questions=[
    { id: 1, question: "What is React JS?", option1:"Used For frontend",option2:"used for backend",option3:"framework ", option4:"All of the above"},
    { id: 2, question: "What is Virtual Dom?", option1:"Used For Rendering",option2:"Avoid Refresh",option3:"None Of the Above ", option4:"All of the above"},
    { id: 3, question: "What is ES6", option1:"Used For Rendering",option2:"Avoid Refresh",option3:"None Of the Above ", option4:"All of the above"},
    { id: 4, question: "What is Java", option1:"Used For webdevelopment",option2:"web",option3:"None Of the Above ", option4:"All of the above"}
  ];
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
