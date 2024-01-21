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
        { french: "red", english: "kırmızı", color: "red-500" },
        { french: "blue", english: "mavi", color: "blue-500" },
        { french: "purple", english: "mor", color: "purple-500" },
        { french: "yellow", english: "sarı", color: "yellow-500" },
        { french: "square", english: "kare", color: "red-500" }
      ],
      [
        { french: "twenty five", english: "yirmi beş", color: "red-500" },
        { french: "thirty three", english: "otuz üç", color: "blue-500" },
        { french: "white", english: "beyaz", color: "red-500" },
        { french: "sixty", english: "altmış", color: "gray-500" },
        { french: "green", english: "yeşil", color: "yellow-500" }
      ],
      [
        { french: "fifty", english: "elli", color: "black-500" },
        { french: "black", english: "siyah", color: "orange-500" },
        { french: "circle", english: "daire", color: "yellow-500" },
        { french: "gray", english: "gri", color: "purple-500" },
        { french: "brown", english: "kahverengi", color: "blue-500" }
      ],
      [
        { french: "zero", english: "sıfır", color: "yellow-500" },
        { french: "one", english: "bir", color: "red-500" },
        { french: "two", english: "iki", color: "blue-500" },
        { french: "three", english: "üç", color: "orange-500" },
        { french: "four", english: "dört", color: "purple-500" }
      ],
      [
        { french: "five", english: "beş", color: "yellow-500" },
        { french: "thirty four", english: "otuz dört", color: "yellow-500" },
        { french: "seven", english: "yedi", color: "red-500" },
        { french: "eight", english: "sekiz", color: "orange-500" },
        { french: "nine", english: "dokuz", color: "purple-500" }
      ],
      [
        { french: "ten", english: "on", color: "blue-500" },
        { french: "eleven", english: "on bir", color: "blue-500" },
        { french: "twelve", english: "on iki", color: "purple-500" },
        { french: "fifteen", english: "on beş", color: "red-500" },
        { french: "twenty", english: "yirmi", color: "orange-500" }
      ]
      
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
