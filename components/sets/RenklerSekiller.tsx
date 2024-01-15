"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import confetti from "canvas-confetti";
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import BackIcon from "@/components/icons/BackIcon";
import ReplayIcon from "@/components/icons/ReplayIcon";

import { WordPair, SelectedPair } from '@/app/types/types';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider
} from "@nextui-org/react";

const RenklerSekiller: React.FC = () => {
  // Extended list of word pairs
  const allWordPairs: WordPair[][] = useMemo(
    () => [
      [
        { french: "rouge", english: "red", color: "red-500" },
        { french: "bleu", english: "blue", color: "blue-500" },
        { french: "violet", english: "purple", color: "purple-500" },
        { french: "jaune", english: "yellow", color: "yellow-500" },
        { french: "carré", english: "square", color: "red-500" },
      ],
      [
        { french: "twenty five", english: "vingt-cinq", color: "red-500" },
        { french: "thirty three", english: "trente-trois", color: "blue-500" },
        { french: "blanc", english: "white", color: "red-500" },
        { french: "sixty", english: "soixante", color: "gray-500" },
        { french: "vert", english: "green", color: "yellow-500" },
      ],
      [
        { french: "fifty", english: "cinquante", color: "black-500" },
        { french: "noir", english: "black", color: "orange-500" },
        { french: "rond", english: "circle", color: "yellow-500" },
        { french: "gris", english: "gray", color: "purple-500" },
        { french: "marron", english: "brown", color: "blue-500" },
      ],
      [
        { french: "zero", english: "zéro", color: "yellow-500" },
        { french: "one", english: "un", color: "red-500" },
        { french: "two", english: "deux", color: "blue-500" },
        { french: "three", english: "trois", color: "orange-500" },
        { french: "four", english: "quatre", color: "purple-500" },
      ],
      [
        { french: "five", english: "cinq", color: "yellow-500" },
        { french: "six", english: "six", color: "yellow-500" },
        { french: "seven", english: "sept", color: "red-500" },
        { french: "eight", english: "huit", color: "orange-500" },
        { french: "nine", english: "neuf", color: "purple-500" },
      ],
      [
        { french: "ten", english: "dix", color: "blue-500" },
        { french: "eleven", english: "onze", color: "blue-500" },
        { french: "twelve", english: "douze", color: "purple-500" },
        { french: "fifteen", english: "quinze", color: "red-500" },
        { french: "twenty", english: "vingt", color: "orange-500" },
      ],
    ],
    []
  );
  const triggerFireworks = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const wordPairs = allWordPairs[currentSetIndex]; // Current set of words

  const [selectedPair, setSelectedPair] = useState<SelectedPair>({
    french: null,
    english: null,
  });
  const [firstClick, setFirstClick] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [tapsCount, setTapsCount] = useState<{ [key: string]: number }>({});

  const isSelected = (word: string) => firstClick === word;

  const isMatched = (word: string) => matchedPairs.includes(word);


  const handleCardClick = (language: keyof SelectedPair, word: string) => {
    setTapsCount((prev) => ({ ...prev, [word]: (prev[word] || 0) + 1 }));

    if (!isMatched(word)) {
      if (!firstClick) {
        setFirstClick(word);
      }
      setSelectedPair((prev) => ({ ...prev, [language]: word }));
    }
  };

  const checkMatch = useCallback(() => {
    const { french, english } = selectedPair;
    if (french && english) {
      const isMatch = wordPairs.some(
        (pair) => pair.french === french && pair.english === english
      );
      if (isMatch) {
        setMatchedPairs((prev) => [...prev, french, english]);
      }
      setSelectedPair({ french: null, english: null });
      setFirstClick(null);
    }
  }, [selectedPair, wordPairs]);

  useEffect(() => {
    if (selectedPair.french && selectedPair.english) {
      return checkMatch();
    }
  }, [selectedPair, checkMatch]);
  // State to track total matched pairs across all sets
  const [totalMatchedPairs, setTotalMatchedPairs] = useState(0);

  // Total number of pairs in all sets
  const totalPairs = allWordPairs.flat().length;

  // Words matched in the current set, counting pairs as one
  const pairsMatchedInCurrentSet = matchedPairs.length / 2;

  // When moving to the next set, update total matched pairs
  useEffect(() => {
    if (matchedPairs.length === wordPairs.length * 2) {
      setTotalMatchedPairs((total) => total + wordPairs.length);
      // Move to the next set if available
      if (currentSetIndex < allWordPairs.length - 1) {
        setCurrentSetIndex(currentSetIndex + 1);
        setMatchedPairs([]);
      } else {
        setCurrentSetIndex(0);
        setMatchedPairs([]);
        setTotalMatchedPairs(0); // Reset the total matched pairs counter
        // Trigger the fireworks display (to be implemented)
        triggerFireworks();
      }
    }
  }, [matchedPairs, wordPairs.length, allWordPairs.length, currentSetIndex]);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = useCallback((array: WordPair[]) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }, []);

  const [shuffledFrenchWords, setShuffledFrenchWords] = useState<WordPair[]>(
    []
  );
  const [shuffledEnglishWords, setShuffledEnglishWords] = useState<WordPair[]>(
    []
  );

  // Shuffle the words on the client side after the component mounts
  useEffect(() => {
    setShuffledFrenchWords(shuffleArray([...wordPairs]));
    setShuffledEnglishWords(shuffleArray([...wordPairs]));
  }, [wordPairs, shuffleArray]);

  const getRingColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "red-500": "ring-red-500",
      "blue-500": "ring-blue-500",
      "orange-500": "ring-orange-500",
      "purple-500": "ring-purple-500",
      "yellow-500": "ring-yellow-500",
      // Add other colors as needed
    };

    return colorMap[color] || "ring-gray-300"; // Default to gray if color not found
  };

  const replayGame = () => {
    setCurrentSetIndex(0); // Reset to the first set
    setMatchedPairs([]); // Clear matched pairs
    setTotalMatchedPairs(0); // Reset the total matched pairs counter
    // Optionally shuffle the words again
    setShuffledFrenchWords(shuffleArray([...allWordPairs[0]]));
    setShuffledEnglishWords(shuffleArray([...allWordPairs[0]]));
  };

  return (
    <>
      <Card shadow="lg" className="max-w-[400px] antialiased">
        <CardHeader className="flex justify-center text-center">
          <div className="w-20 h-20 flex items-center justify-center text-xl font-bold rounded-full bg-black text-white ">
            <span>
              {totalMatchedPairs + pairsMatchedInCurrentSet}/{totalPairs}
            </span>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="grid grid-cols-2 gap-4 text-gray-800 text-center text-2xl">
            <div className="french">
              {shuffledFrenchWords.map((pair, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick("french", pair.french)}
                  className={`m-5 h-[4.5rem] w-36 rounded-md flex flex-col items-center justify-center cursor-pointer ring-4 ${
                    isMatched(pair.french)
                      ? `${getRingColorClass(pair.color)} bg-green-500`
                      : isSelected(pair.french)
                      ? "bg-yellow-500 ring-gray-300"
                      : "bg-white ring-gray-300"
                  }`}
                >
                  <span>{pair.french}</span>
                  {tapsCount[pair.french] >= 3 && !isMatched(pair.french) && (
                    <span className="translation">{pair.english}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="english">
              {shuffledEnglishWords.map((pair, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick("english", pair.english)}
                  className={`m-5 h-[4.5rem] w-36 rounded-md flex flex-col items-center justify-center cursor-pointer ring-4 ${
                    isMatched(pair.english)
                      ? `${getRingColorClass(pair.color)} bg-green-500`
                      : isSelected(pair.english)
                      ? "bg-yellow-500 ring-gray-300"
                      : "bg-white ring-gray-300"
                  }`}
                >
                  <span>{pair.english}</span>
                  {tapsCount[pair.english] >= 3 && (
                    <span className="translation">{pair.french}</span>
                  )}
                </div>
              ))}
            </div>
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
    </>
  );
};

export default RenklerSekiller;