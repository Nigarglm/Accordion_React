// Components
import Question from "./components/Question";
import Option from "./components/Option";

// Hooks
import { useState, useEffect } from "react";


const App = () => {
  const[questionId,setQuestionId] = useState(1);
  const[question,setQuestion] = useState();

  const fetchQuestionsFromJsonServer = async () => {
    const response = await fetch(
      `http://localhost:3000/questions/${questionId}`
    );
    const data = await response.json();

    setQuestion(data);
  }

  useEffect(() => {
    fetchQuestionsFromJsonServer();
  }, [questionId])

  const selectOption = () =>{
    setQuestionId(questionId+1)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container rounded-xl overflow-hidden">
        <Question question={question} questionId={questionId} />
        <Option selectOption={selectOption} question={question} />
      </div>
    </div>
  );
};


export default App;