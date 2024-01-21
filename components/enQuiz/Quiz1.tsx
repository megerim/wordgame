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
    question: "Translate into the direct object pronoun: He loves you.",
    answers: ["Il ta adore", "Il adore te", "Il t'adore", "Il adore tu"],
    correctAnswer: "Il t'adore",
  },
  {
    question: "Me, Le, and Te can become M', T', L' (e.g m'aime)",
    answers: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "Arrange this sentence into the direct object pronoun: Elle donne les cadeaux.",
    answers: ["Elle donne les cadeux", "Elle donne les", "Elle les donne", "Elle leur donne"],
    correctAnswer: "Elle les donne",
  },
  {
    question: "Il leur achete des Livres. This is an example of the direct object pronoun.",
    answers: ["True", "False"],
    correctAnswer: "False",
  },
  // Yeni eklenen soru
  {
    question: "Quel est le complément d'objet direct dans la phrase suivante? J'aime lire ce livre.",
    answers: ["Ce livre","J'aime", "Lire",  "Ce"],
    correctAnswer: "Ce livre",
  },
  {
    question: "Dans la phrase 'Elle regarde le film avec intérêt', quel est le complément d'objet direct?",
    answers: ["Elle", "Regarde", "Le film", "Avec intérêt"],
    correctAnswer: "Le film",
  },
  {
    question: "Identifiez le complément d'objet direct dans la phrase : Nous écoutons la musique.",
    answers: ["Nous", "Écoutons", "La musique", "Écouter"],
    correctAnswer: "La musique",
  },
  {
    question: "Trouvez le complément d'objet direct dans la phrase : Tu prépares le dîner.",
    answers: ["Tu", "Prépares", "Le dîner", "Préparer"],
    correctAnswer: "Le dîner",
  },
  {
    question: "Dans la phrase 'Ils ont perdu leurs clés hier soir', quel est le complément d'objet direct?",
    answers: ["Ils", "Ont perdu", "Hier soir", "Leurs clés"],
    correctAnswer: "Leurs clés",
  },
  {
    question: "'J'aime ces chaussures, il me _______ faut.'",
    answers: ["Me", "Les", "Il", "Faut"],
    correctAnswer: "Les",
  },
  {
    question: "Dans la phrase 'Nous avons du mal à faire ce devoir, on peut demander au professeur qu’il ________ aide.', quel pronom COD convient ?",
    answers: ["Du mal", "Nous", "Le", "Il"],
    correctAnswer: "Nous",
  },
  {
    question: " 'Vous lisez le journal régulièrement ?' en utilisant le pronom direct qui convient.",
    answers: ["Oui, le lis.", "Non, le ne lis pas.", "Régulièrement", "Vous"],
    correctAnswer: "Oui, le lis.",
  },
  {
    question: "'Est-ce que tu écoutes la radio tous les matins ?'",
    answers: ["Tu", "La radio", "Tous les matins", "Est-ce que"],
    correctAnswer: "La radio",
  },
  {
    question: " 'Vous appréciez Nantes ?' en utilisant le pronom direct qui convient.",
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
