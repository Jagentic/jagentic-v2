import React, { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

const QuestionCard = ({
    question,
    totalQuestions,
    currentIndex,
    onAnswer,
    onNext,
    selectedAnswer,
    isCorrect
}) => {
    const [showHint, setShowHint] = useState(false);

    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    return (
        <div className="w-full max-w-2xl bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <div
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-8 mt-2">
                <span className="text-sm font-mono text-gray-400">
                    Question {currentIndex + 1} / {totalQuestions}
                </span>
                <div className="flex gap-2">
                    {/* Placeholder for streaks or timer if needed */}
                </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 leading-tight">
                {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
                {question.options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isAnswered = selectedAnswer !== null;

                    // Determine styling based on state
                    let borderClass = "border-white/10 hover:border-white/30";
                    let bgClass = "bg-white/5 hover:bg-white/10";
                    let textClass = "text-gray-300";

                    if (isSelected) {
                        if (isCorrect) {
                            borderClass = "border-accent";
                            bgClass = "bg-accent/10";
                            textClass = "text-white";
                        } else {
                            borderClass = "border-red-500";
                            bgClass = "bg-red-500/10";
                            textClass = "text-white";
                        }
                    } else if (isAnswered && idx === question.correctAnswer && !isCorrect) {
                        // Show correct answer if user got it wrong
                        borderClass = "border-accent/50";
                        textClass = "text-accent";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => !isAnswered && onAnswer(idx)}
                            disabled={isAnswered}
                            className={clsx(
                                "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group",
                                borderClass,
                                bgClass,
                                textClass,
                                isAnswered ? "cursor-default" : "cursor-pointer"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-xs opacity-50">{String.fromCharCode(65 + idx)}.</span>
                                <span className="text-lg">{option}</span>
                            </div>

                            {isSelected && (
                                isCorrect ? <CheckCircle className="text-accent w-5 h-5" /> : <XCircle className="text-red-500 w-5 h-5" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Footer Actions */}
            <div className="flex justify-between items-end">
                <div className="flex-1">
                    <button
                        onClick={() => setShowHint(!showHint)}
                        className="text-sm text-gray-500 hover:text-accent-blue flex items-center gap-2 transition-colors"
                    >
                        <Lightbulb className="w-4 h-4" />
                        {showHint ? "Hide Hint" : "Show Hint"}
                    </button>

                    {showHint && (
                        <div className="mt-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-200 animate-in fade-in slide-in-from-bottom-2">
                            <span className="font-bold mr-2">Hint:</span>
                            {question.hint}
                        </div>
                    )}
                </div>

                {selectedAnswer !== null && (
                    <div className="flex-grow mr-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="p-4 bg-white/10 border border-white/20 rounded-xl text-sm shadow-lg backdrop-blur-md">
                            <span className="font-bold text-accent mb-1 flex items-center gap-2">
                                <span className="text-lg">💡</span> Explanation
                            </span>
                            <span className="text-gray-200 leading-relaxed block">{question.explanation}</span>
                        </div>
                    </div>
                )}

                {selectedAnswer !== null && (
                    <button
                        onClick={onNext}
                        className="shrink-0 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 animate-in fade-in slide-in-from-right-4 shadow-xl hover:scale-105 active:scale-95"
                    >
                        Next <ArrowRight className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuestionCard;
