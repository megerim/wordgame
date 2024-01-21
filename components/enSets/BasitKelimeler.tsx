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
        { french: "cat", english: "kedi", color: "red-500" },
        { french: "dog", english: "köpek", color: "blue-500" },
        { french: "apple", english: "elma", color: "orange-500" },
        { french: "book", english: "kitap", color: "purple-500" },
        { french: "house", english: "ev", color: "yellow-500" }
      ],
      [
        { french: "car", english: "araba", color: "yellow-500" },
        { french: "sun", english: "güneş", color: "red-500" },
        { french: "flower", english: "çiçek", color: "orange-500" },
        { french: "tree", english: "ağaç", color: "purple-500" },
        { french: "moon", english: "ay", color: "blue-500" }
      ],
      [
        { french: "star", english: "yıldız", color: "yellow-500" },
        { french: "sky", english: "gökyüzü", color: "blue-500" },
        { french: "mountain", english: "dağ", color: "purple-500" },
        { french: "sea", english: "deniz", color: "red-500" },
        { french: "earth", english: "dünya", color: "orange-500" }
      ],
      [
        { french: "fire", english: "ateş", color: "red-500" },
        { french: "water", english: "su", color: "blue-500" },
        { french: "stone", english: "taş", color: "gray-500" },
        { french: "spider", english: "örümcek", color: "black-500" },
        { french: "bird", english: "kuş", color: "green-500" }
      ]
      ,
     
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
