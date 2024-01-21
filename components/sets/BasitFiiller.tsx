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
        { french: "aller", english: "go", color: "red-500" },
        { french: "attendre", english: "wait(for)", color: "blue-500" },
        { french: "boire", english: "drink", color: "purple-500" },
        { french: "commencer", english: "start", color: "yellow-500" },
        { french: "dire", english: "say/tell", color: "blue-500" },
      ],
      [
        { french: "comprendre", english: "understand", color: "yellow-500" },
        { french: "avoir", english: "have", color: "orange-500" },
        { french: "décider", english: "decide", color: "red-500" },
        { french: "parler", english: "talk/speak", color: "yellow-500" },
        { french: "devenir", english: "become", color: "purple-500" },
      ],
      [
        { french: "demander", english: "ask", color: "orange-500" },
        { french: "partir", english: "leave", color: "red-500" },
        { french: "suivre", english: "follow", color: "red-500" },
        { french: "rester", english: "stay", color: "purple-500" },
        { french: "pouvoir", english: "to be able to", color: "blue-500" },
      ],
      [
        { french: "prendre", english: "take", color: "yellow-500" },
        { french: "rendre", english: "return (obj)", color: "red-500" },
        { french: "répondre", english: "respond", color: "orange-500" },
        { french: "penser", english: "think", color: "orange-500" },
        { french: "revenir", english: "come back", color: "blue-500" },
      ],
      [
        { french: "porter", english: "wear/carry", color: "purple-500" },
        { french: "savoir", english: "know", color: "yellow-500" },
        { french: "téléphoner", english: "call", color: "orange-500" },
        { french: "vivre", english: "decide", color: "red-500" },
        { french: "trouver", english: "find", color: "blue-500" },
      ],
      [
        { french: "tenir", english: "hold/keep", color: "purple-500" },
        { french: "venir", english: "come", color: "yellow-500" },
        { french: "voir", english: "ask", color: "orange-500" },
        { french: "vouloir", english: "become", color: "purple-500" },
        { french: "devoir", english: "to have to", color: "blue-500" },
      ],
      [
        { french: "donner", english: "give", color: "yellow-500" },
        { french: "entendre", english: "hear", color: "blue-500" },
        { french: "être", english: "to be", color: "purple-500" },
        { french: "faire", english: "do/make", color: "red-500" },
        { french: "laisser", english: "leave", color: "orange-500" },
      ],
      [
        { french: "lire", english: "read", color: "red-500" },
        { french: "manger", english: "eat", color: "blue-500" },
        { french: "mettre", english: "put", color: "gray-500" },
        { french: "montrer", english: "show", color: "black-500" },
        { french: "occuper", english: "occupy", color: "green-500" },
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
