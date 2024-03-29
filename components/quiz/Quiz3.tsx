"use client";
import { useState, useEffect } from 'react';
import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';
import BackIcon from "@/components/icons/BackIcon";
import ReplayIcon from "@/components/icons/ReplayIcon";
import confetti from "canvas-confetti";

interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const quizData: QuizQuestion[] = [
  {
    question: "Comment dit-on 'hello' en français?",
    answers: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
    correctAnswer: "Bonjour",
  },
  {
    question: "Quelle est la traduction de 'thank you' en français?",
    answers: ["Bonjour", "Oui", "Merci", "Non"],
    correctAnswer: "Merci",
  },
  {
    question: "Comment demande-t-on 'how are you?' en français?",
    answers: ["Comment ça va?", "Quelle heure est-il?", "Où est la bibliothèque?", "Quel âge as-tu?"],
    correctAnswer: "Comment ça va?",
  },
  {
    question: "Que signifie 'I love you' en français?",
    answers: ["Je te déteste", "Je ne sais pas", "Je suis désolé", "Je t'aime"],
    correctAnswer: "Je t'aime",
  },
  {
    question: "Comment dit-on 'goodbye' en français?",
    answers: ["Bonjour", "Au revoir", "Merci", "Oui"],
    correctAnswer: "Au revoir",
  }
];


const MiniQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      // Move to next question after a short delay
      setTimeout(() => {
        if (currentQuestionIndex < quizData.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null);
          setIsCorrect(null);
        } else {
          // Fire confetti when all questions are correctly answered
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }, 1000); // Delay of 1 second
    }
  };

  const replayGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [currentQuestionIndex]);

  return (
    <>
    <div className='flex-col mx-auto'>

      <div className='flex justify-between items-center mb-2'>
        <p>Question {currentQuestionIndex + 1} of {quizData.length}</p>

<div className='flex gap-5'>
        <Link href="../" passHref>
            <Button isIconOnly size="sm" color="warning" radius="sm">
              <BackIcon />
            </Button>
          </Link>
          <Button
            isIconOnly
            size="sm"
            color="secondary"
            radius="sm"
            onClick={replayGame}
          >
            <ReplayIcon />
          </Button>
        </div>
        </div>
      <Divider />
      <div className='justify-center flex pt-2'>
        <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>

      </div>
        <div className="flex flex-col gap-2">
          {currentQuestion.answers.map((answer) => (
            <Button 
              key={answer}
              color={selectedAnswer === answer ? (isCorrect ? 'success' : 'danger') : 'default'}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </Button>
          ))}
        </div>
      <Divider />
      <div className="flex justify-between px-16">
          
      </div>
      </div>
      </>
  );
};

export default MiniQuiz;
