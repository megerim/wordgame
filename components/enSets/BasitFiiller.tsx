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
        { french: "go", english: "gitmek", color: "red-500" },
        { french: "wait(for)", english: "beklemek", color: "blue-500" },
        { french: "drink", english: "içmek", color: "purple-500" },
        { french: "start", english: "başlamak", color: "yellow-500" },
        { french: "say/tell", english: "söylemek", color: "blue-500" }
      ],
      [
        { french: "understand", english: "anlamak", color: "yellow-500" },
        { french: "have", english: "sahip olmak", color: "orange-500" },
        { french: "decide", english: "karar vermek", color: "red-500" },
        { french: "talk/speak", english: "konuşmak", color: "yellow-500" },
        { french: "become", english: "olmak", color: "purple-500" }
      ],
      [
        { french: "ask", english: "sormak", color: "orange-500" },
        { french: "leave", english: "ayrılmak", color: "red-500" },
        { french: "follow", english: "takip etmek", color: "red-500" },
        { french: "stay", english: "kalmak", color: "purple-500" },
        { french: "to be able to", english: "yapabilmek", color: "blue-500" }
      ],
      [
        { french: "take", english: "almak", color: "yellow-500" },
        { french: "return (obj)", english: "geri döndürmek", color: "red-500" },
        { french: "respond", english: "yanıtlamak", color: "orange-500" },
        { french: "think", english: "düşünmek", color: "orange-500" },
        { french: "come back", english: "geri dönmek", color: "blue-500" }
      ],
      [
        { french: "wear", english: "giymek", color: "purple-500" },
        { french: "know", english: "bilmek", color: "yellow-500" },
        { french: "call", english: "aramak", color: "orange-500" },
        { french: "live", english: "yaşamak", color: "red-500" }, 
        { french: "find", english: "bulmak", color: "blue-500" }
      ],
      [
        { french: "hold", english: "tutmak", color: "purple-500" },
        { french: "come", english: "gelmek", color: "yellow-500" },
        { french: "see", english: "görmek", color: "orange-500" }, 
        { french: "want", english: "istemek", color: "purple-500" }, 
        { french: "to have to", english: "mecbur olmak", color: "blue-500" }
      ],
      [
        { french: "give", english: "vermek", color: "yellow-500" },
        { french: "hear", english: "duymak", color: "blue-500" },
        { french: "to be", english: "olmak", color: "purple-500" },
        { french: "do/make", english: "yapmak", color: "red-500" },
        { french: "leave", english: "terk etmek", color: "orange-500" }
      ],
      [
        { french: "read", english: "okumak", color: "red-500" },
        { french: "eat", english: "yemek", color: "blue-500" },
        { french: "put", english: "koymak", color: "gray-500" },
        { french: "show", english: "göstermek", color: "black-500" },
        { french: "occupy", english: "işgal etmek", color: "green-500" }
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
