import { WordPair } from '@/app/types/types';

interface WordCardGridProps {
  frenchWords: WordPair[];
  englishWords: WordPair[];
  handleCardClick: (language: 'french' | 'english', word: string) => void;
  isMatched: (word: string) => boolean;
  isSelected: (word: string) => boolean;
  getRingColorClass: (color: string) => string;
  tapsCount: { [key: string]: number };
}

const WordCardGrid: React.FC<WordCardGridProps> = ({
  frenchWords,
  englishWords,
  handleCardClick,
  isMatched,
  isSelected,
  getRingColorClass,
  tapsCount
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-gray-800 text-center text-2xl">
      <div className="french">
        {frenchWords.map((pair, index) => (
          <div
            key={index}
            onClick={() => handleCardClick('french', pair.french)}
            className={`my-6 h-[4.5rem] w-42 rounded-md flex flex-col items-center justify-center cursor-pointer ring-4 ${
              isMatched(pair.french)
                ? `${getRingColorClass(pair.color)} bg-green-500`
                : isSelected(pair.french)
                ? "bg-yellow-500 ring-gray-300"
                : "bg-white ring-gray-300"
            }`}
          >
            <span>{pair.french}</span>
            {tapsCount[pair.french] >= 5 && !isMatched(pair.french) && (
              <span className="translation">{pair.english}</span>
            )}
          </div>
        ))}
      </div>
      <div className="english">
        {englishWords.map((pair, index) => (
          <div
            key={index}
            onClick={() => handleCardClick('english', pair.english)}
            className={`my-6 h-[4.5rem] w-42 rounded-md flex flex-col items-center justify-center cursor-pointer ring-4 ${
              isMatched(pair.english)
                ? `${getRingColorClass(pair.color)} bg-green-500`
                : isSelected(pair.english)
                ? "bg-yellow-500 ring-gray-300"
                : "bg-white ring-gray-300"
            }`}
          >
            <span>{pair.english}</span>
            {tapsCount[pair.english] >= 5 && (
              <span className="translation">{pair.french}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordCardGrid;
