import React, { useContext, useState } from 'react'
import '../App.css'
import { questions } from '../helpers/Questions'
import { GameStateContext } from '../helpers/Contexts'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState('');
    const {score,setScore,setGameState} = useContext(GameStateContext);

    const chooseOption = (option) =>{
        setOptionChosen(option)
    }

    const nextQuestion = () => {
        if(questions[currentQuestion].answer === optionChosen){
            console.log('Correct answer');
            setScore(score => score + 1);
        }
        else{
            console.log('Wrong anser');
        }

        setCurrentQuestion(currentQuestion => currentQuestion + 1)
    }

    const finishQuiz = () =>{
        if(questions[currentQuestion].answer === optionChosen){
            console.log('Correct answer');
            setScore(score => score + 1);
        }
        setGameState('finished')
    }

    return (
        <div className='quiz'>
            <h1>{questions[currentQuestion].propmt}</h1>
            <div className="answers">
                <button onClick={()=>{chooseOption('optionA')}}>{questions[currentQuestion].optionA}</button>
                <button onClick={()=>{chooseOption('optionB')}}>{questions[currentQuestion].optionB}</button>
                <button onClick={()=>{chooseOption('optionC')}}>{questions[currentQuestion].optionC}</button>
                <button onClick={()=>{chooseOption('optionD')}}>{questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion === questions.length -1 ? (
            <button className='finish-question' onClick={finishQuiz}>Finish Quiz</button>
            ):(
            <button className='next-question' onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    )
}

export default Quiz