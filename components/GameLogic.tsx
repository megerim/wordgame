import { useState, useCallback, useEffect } from "react";
import confetti from "canvas-confetti";
import { WordPair, SelectedPair } from "@/app/types/types";

const useGameLogic = (allWordPairs: WordPair[][]) => {
  const [currentSetIndex, setCurrentSetIndex] = useState<number>(0);
  const wordPairs = allWordPairs[currentSetIndex];

  const triggerFireworks = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

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

  return {
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
  };
};

export default useGameLogic;
