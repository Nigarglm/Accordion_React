// Components
import Question from "./components/Question";
import Option from "./components/Option";

// Hooks
import { useState, useEffect } from "react";


const App = () => {
  const[questionId,setQuestionId] = useState(1);
  const[question,setQuestion] = useState();
  const[selectedOption,setSelectedOption] = useState(null);

  const fetchQuestionsFromJsonServer = async () => {
    const response = await fetch(
      `http://localhost:3000/questions/${questionId}`
    );
    const data = await response.json();

    setQuestion(data);
    setSelectedOption(null);
  }

  useEffect(() => {
    fetchQuestionsFromJsonServer();
  }, [questionId])

  const selectOption = (event) =>{
    setSelectedOption(event.target.textContent)

    setTimeout(() => {
      setQuestionId(questionId+1)
    }, 1000)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container rounded-xl overflow-hidden">
        <Question question={question} questionId={questionId} />
        <Option selectedOption={selectedOption} selectOption={selectOption} question={question} />
      </div>
    </div>
  );
};


export default App;