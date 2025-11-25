import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';
import { quizQuestions } from '../../data/quizData';

const QuizContainer = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    // Initialize and randomize questions on mount
    useEffect(() => {
        startQuiz();
    }, []);

    const startQuiz = () => {
        // Shuffle questions and pick top 20 (or fewer for now)
        const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, 20));
        setCurrentIndex(0);
        setScore(0);
        setIsFinished(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    const handleAnswer = (optionIndex) => {
        const currentQuestion = questions[currentIndex];
        const correct = optionIndex === currentQuestion.correctAnswer;

        setSelectedAnswer(optionIndex);
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
        } else {
            setIsFinished(true);
        }
    };

    if (questions.length === 0) return null;

    return (
        <div className="w-full flex justify-center items-center p-4">
            {!isFinished ? (
                <QuestionCard
                    question={questions[currentIndex]}
                    totalQuestions={questions.length}
                    currentIndex={currentIndex}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    selectedAnswer={selectedAnswer}
                    isCorrect={isCorrect}
                />
            ) : (
                <ResultsCard
                    score={score}
                    totalQuestions={questions.length}
                    onRestart={startQuiz}
                />
            )}
        </div>
    );
};

export default QuizContainer;
