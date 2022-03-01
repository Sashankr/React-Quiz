import React, { useState } from 'react'
import '../App.css'
import { questions } from '../helpers/Questions'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState('');

    const chooseOption = (option) =>{
        setOptionChosen(option)
    }

    const nextQuestion = () => {
        if(questions[currentQuestion].answer === optionChosen){
            console.log('Correct answer');
        }
        else{
            console.log('Wrong anser');
        }

        setCurrentQuestion(currentQuestion => currentQuestion + 1)
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
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    )
}

export default Quiz