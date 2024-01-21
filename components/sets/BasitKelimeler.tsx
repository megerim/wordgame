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
        { french: "chat", english: "cat", color: "red-500" },
        { french: "chien", english: "dog", color: "blue-500" },
        { french: "pomme", english: "apple", color: "orange-500" },
        { french: "livre", english: "book", color: "purple-500" },
        { french: "maison", english: "house", color: "yellow-500" },
      ],
      [
        { french: "voiture", english: "car", color: "yellow-500" },
        { french: "soleil", english: "sun", color: "red-500" },
        { french: "fleur", english: "flower", color: "orange-500" },
        { french: "arbre", english: "tree", color: "purple-500" },
        { french: "lune", english: "moon", color: "blue-500" },
      ],
      [
        { french: "étoile", english: "star", color: "yellow-500" },
        { french: "ciel", english: "sky", color: "blue-500" },
        { french: "montagne", english: "mountain", color: "purple-500" },
        { french: "mer", english: "sea", color: "red-500" },
        { french: "terre", english: "earth", color: "orange-500" },
      ],
      [
        { french: "feu", english: "fire", color: "red-500" },
        { french: "eau", english: "water", color: "blue-500" },
        { french: "pierre", english: "stone", color: "gray-500" },
        { french: "araignée", english: "spider", color: "black-500" },
        { french: "oiseau", english: "bird", color: "green-500" },
      ],
      // Add more sets as needed...
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
