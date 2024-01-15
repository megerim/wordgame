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
    question: "Qui ou quoi remplace le pronom 'le' dans la phrase : 'Tu regardes le match chez Joseph ?'",
    answers: ["Tu", "Le match", "Chez Joseph", "Eric"],
    correctAnswer: "Le match",
  },
  {
    question: "Quel pronom COD complète la phrase : 'J'aime ces chaussures, il me _______ faut.'",
    answers: ["Me", "Les", "Il", "Faut"],
    correctAnswer: "Les",
  },
  {
    question: "Quel pronom COD convient à la phrase : 'Phil et Eric construisent une maison, ils ________ construisent en bois.'",
    answers: ["Une maison", "Ils", "En bois", "Construisent"],
    correctAnswer: "La construisent",
  },
  {
    question: "Dans la phrase 'Nous avons du mal à faire ce devoir, on peut demander au professeur qu’il ________ aide.', quel pronom COD convient ?",
    answers: ["Du mal", "Nous", "Le", "Il"],
    correctAnswer: "Nous",
  },
  {
    question: "Quel pronom COD complète la phrase : 'Pablo est un super ami, je ________ attends pour aller à la piscine.'",
    answers: ["Pablo", "Un super ami", "Je", "À la piscine"],
    correctAnswer: "Le",
  },
  {
    question: "Dans la phrase 'Mes clés ? Je ________ ai laissées à l'hôtel.', quel pronom COD convient ?",
    answers: ["Mes clés", "Je", "Les", "À l'hôtel"],
    correctAnswer: "Les",
  },
  {
    question: "Quel pronom COD convient à la phrase : 'Là je suis vraiment en retard. Tu vas ________ gronder, je ________ sais !'",
    answers: ["En retard", "Tu", "Me", "Je"],
    correctAnswer: "Me, Le",
  },
  {
    question: "Répondez à la question : 'Vous lisez le journal régulièrement ?' en utilisant le pronom direct qui convient.",
    answers: ["Oui, le lis.", "Non, le ne lis pas.", "Régulièrement", "Vous"],
    correctAnswer: "Oui, le lis.",
  },
  {
    question: "Quel pronom COD convient à la phrase : 'Est-ce que tu écoutes la radio tous les matins ?'",
    answers: ["Tu", "La radio", "Tous les matins", "Est-ce que"],
    correctAnswer: "La radio",
  },
  {
    question: "Répondez à la question : 'Vous appréciez Nantes ?' en utilisant le pronom direct qui convient.",
    answers: ["Oui, l'apprécie.", "Non, ne l'apprécie pas.", "Nantes", "Vous"],
    correctAnswer: "Oui, l'apprécie.",
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
    <div  >
    <Card className='min-h-[450px] min-w-[450px] antialiased'>
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
