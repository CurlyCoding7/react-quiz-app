import React, { useCallback, useState } from 'react'
import QUESTIONS from "../questions.js"
import trophy from "../assets/quiz-complete.png"
import QuesTimer from './QuesTimer.jsx';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  
  const activeQuesIndex = userAnswers.length;

  const isQuizComplete = activeQuesIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAns) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAns]);

  },[])

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if(isQuizComplete){
    return <div id='summary'>
        <img src={trophy} alt="Trophy" />
        <h2>Quiz Complete</h2>
    </div>
  }

  const shuffledAns = [...QUESTIONS[activeQuesIndex].answers];

  shuffledAns.sort(() => Math.random() - 0.5)



  return (
    <div id='quiz'>
    <div id='question'>
        <QuesTimer key={activeQuesIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuesIndex].text}</h2>
        <ul id='answers'>
            {
                shuffledAns.map((answer) => {
                    return <li key={answer} className='answer'>
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                })
            }

        </ul>
    </div>
    </div>
  )
}

export default Quiz