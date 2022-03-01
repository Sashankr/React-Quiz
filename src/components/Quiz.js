import React, { useState } from 'react'
import '../App.css'
import { questions } from '../helpers/Questions'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState('');

    const chooseOption = (option) =>{

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
        </div>
    )
}

export default Quiz