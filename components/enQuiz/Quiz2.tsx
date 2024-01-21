"use client";
import { useState, useEffect } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Divider } from '@nextui-org/react';
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
    question: "Translate this using the indirect object pronoun: I'm giving the bread to you (pl)",
    answers: ["Je donne vous le pain", "Je vous donne le pain", "Je donne le pain a vous", "Le pain est donne a vous"],
    correctAnswer: "Je vous donne le pain",
  },
  {
    question: "Identifiez le complément d'objet indirect dans la phrase : Il parle à son ami.",
    answers: ["Il", "Parle", "À son ami", "Ami"],
    correctAnswer: "À son ami",
  },
  {
    question: "Quel est le complément d'objet indirect dans la phrase : Elle donne un cadeau à sa sœur.",
    answers: ["Elle", "Donne", "Un cadeau", "À sa sœur"],
    correctAnswer: "À sa sœur",
  },
  {
    question: "Dans la phrase 'Il envoie une lettre à sa grand-mère', quel est le complément d'objet indirect?",
    answers: ["Il", "Envoie", "Une lettre", "À sa grand-mère"],
    correctAnswer: "À sa grand-mère",
  },
  
  {
    question: "Quel est le complément d'objet indirect dans la phrase : Elle raconte une histoire à ses enfants.",
    answers: ["Elle", "Raconte", "Une histoire", "À ses enfants"],
    correctAnswer: "À ses enfants",
  },
  
  {
    question: "Identifiez le complément d'objet indirect dans la phrase : Il offre des fleurs à sa petite amie.",
    answers: ["Il", "Offre", "Des fleurs", "À sa petite amie"],
    correctAnswer: "À sa petite amie",
  },
  {
    question: "Qui ou quoi remplace le pronom 'le' dans la phrase : 'Tu regardes le match chez Joseph ?'",
    answers: ["Tu", "Le match", "Chez Joseph", "Eric"],
    correctAnswer: "Le match",
  },
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
    // Reset game state when current question index changes
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [currentQuestionIndex]);

  return (
    <div className=' px-2' >
    <Card className='min-h-[450px] max-w-[450px] antialiased'>
      <CardHeader>
        <p>Question {currentQuestionIndex + 1} of {quizData.length}</p>
      </CardHeader>
      <Divider />
      <CardBody className='justify-center flex'>
        <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>
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
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between px-16">
          <Link href="/" passHref>
            <Button isIconOnly size="lg" color="warning" radius="sm">
              <BackIcon />
            </Button>
          </Link>
          <Button
            isIconOnly
            size="lg"
            color="secondary"
            radius="sm"
            onClick={replayGame}
          >
            <ReplayIcon />
          </Button>
      </CardFooter>
    </Card>
    </div>
  );
};

export default MiniQuiz;
