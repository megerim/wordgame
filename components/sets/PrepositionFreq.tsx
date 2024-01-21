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
        { french: "sur", english: "on", color: "yellow-500" },
        { french: "dans", english: "in", color: "red-500" },
        { french: "devant", english: "in front of", color: "orange-500" },
        { french: "à gauche de", english: "on the left", color: "orange-500" },
        { french: "entre", english: "between", color: "purple-500" },
      ],
      [
        { french: "derriére", english: "behind", color: "yellow-500" },
        { french: "sous", english: "under", color: "blue-500" },
        { french: "à côté de", english: "next to", color: "yellow-500" },
        { french: "à droite de", english: "on the right", color: "red-500" },
        { french: "en face de", english: "across", color: "purple-500" },
      ],
      [
        { french: "toujours", english: "always", color: "yellow-500" },
        { french: "souvent", english: "often", color: "blue-500" },
        { french: "quelquefois", english: "sometimes", color: "yellow-500" },
        { french: "rarement", english: "rarely", color: "red-500" },
        { french: "ne...jamais", english: "never", color: "purple-500" },
      ],
      [
        {
          french: "tout le temps",
          english: "all the time",
          color: "yellow-500",
        },
        { french: "tous les jours", english: "everyday", color: "blue-500" },
        { french: "chaque jour", english: "each day", color: "yellow-500" },
        { french: "chaque soir", english: "each evening", color: "red-500" },
        { french: "chaque semaine", english: "each wake", color: "purple-500" },
      ],
      [
        {
          french: "tout le temps",
          english: "all the time",
          color: "yellow-500",
        },
        { french: "tous les jours", english: "everyday", color: "blue-500" },
        { french: "une fois", english: "once", color: "yellow-500" },
        { french: "deux fois", english: "twice", color: "red-500" },
        { french: "par semaine", english: "each wake", color: "purple-500" },
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
