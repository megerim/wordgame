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
        { french: "on", english: "üzerinde", color: "yellow-500" },
        { french: "in", english: "içinde", color: "red-500" },
        { french: "in front of", english: "önünde", color: "orange-500" },
        { french: "on the left", english: "solunda", color: "orange-500" },
        { french: "between", english: "arasında", color: "purple-500" }
      ],
      [
        { french: "behind", english: "arkasında", color: "yellow-500" },
        { french: "under", english: "altında", color: "blue-500" },
        { french: "next to", english: "yanında", color: "yellow-500" },
        { french: "on the right", english: "sağında", color: "red-500" },
        { french: "across", english: "karşısında", color: "purple-500" }
      ],
      [
        { french: "always", english: "her zaman", color: "yellow-500" },
        { french: "often", english: "sık sık", color: "blue-500" },
        { french: "sometimes", english: "bazen", color: "yellow-500" },
        { french: "rarely", english: "nadiren", color: "red-500" },
        { french: "never", english: "asla", color: "purple-500" }
      ],
      [
        { french: "all the time", english: "her zaman", color: "yellow-500" },
        { french: "everyday", english: "her gün", color: "blue-500" },
        { french: "each day", english: "her gün", color: "yellow-500" },
        { french: "each evening", english: "her akşam", color: "red-500" },
        { french: "each week", english: "her hafta", color: "purple-500" } 
      ],
      [
        { french: "all the time", english: "her zaman", color: "yellow-500" },
        { french: "everyday", english: "her gün", color: "blue-500" },
        { french: "once", english: "bir kez", color: "yellow-500" },
        { french: "twice", english: "iki kez", color: "red-500" },
        { french: "per week", english: "haftada bir", color: "purple-500" }
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
