"use client";
import { useMemo } from "react";
import useGameLogic from "../GameLogic";
import GameBtn from "../GameBtn";
import WordCardGrid from "../CardRender";
import { WordPair } from "@/app/types/types";

const BasitFiiller: React.FC = () => {
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
        {
          french: "thirty four",
          english: "trente quatre",
          color: "yellow-500",
        },
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

  const {
    handleCardClick,
    shuffledFrenchWords,
    shuffledEnglishWords,
    replayGame,
    isMatched,
    isSelected,
    getRingColorClass,
    totalMatchedPairs,
    pairsMatchedInCurrentSet,
    totalPairs,
    tapsCount,
  } = useGameLogic(allWordPairs);

  return (
    <div>
      <GameBtn
        totalMatchedPairs={totalMatchedPairs}
        pairsMatchedInCurrentSet={pairsMatchedInCurrentSet}
        totalPairs={totalPairs}
        replayGame={replayGame}
      />

<WordCardGrid 
  frenchWords={shuffledFrenchWords}
  englishWords={shuffledEnglishWords}
  handleCardClick={handleCardClick}
  isMatched={isMatched}
  isSelected={isSelected}
  getRingColorClass={getRingColorClass}
  tapsCount={tapsCount}
/>


    </div>
  );
};

export default BasitFiiller;
