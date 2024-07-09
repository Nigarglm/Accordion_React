// Components
import FAQ from "./components/FAQ";
import Header from "./components/Header";

// Hooks
import { useState } from "react";

// Data
import { faqData } from "./data";

const App = () => {

  const [questions,setQuestions] = useState(faqData);

  const toggleAccordion = (index) =>{
    const cloneQuestions = [...questions]
    const clickedQuestion = cloneQuestions[index]
    clickedQuestion.show = !clickedQuestion.show

    setQuestions(cloneQuestions)
  }
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins ">
      <div className="w-[500px] rounded-xl bg-white shadow-lg">
        <Header />
        <FAQ questions={questions} faqClick={toggleAccordion} />
      </div>
    </div>
  );
};

export default App;