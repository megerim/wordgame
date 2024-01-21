import { Button } from "@nextui-org/react";
import Link from "next/link";
import BackIcon from "@/components/icons/BackIcon";
import ReplayIcon from "@/components/icons/ReplayIcon";

interface GameBtnProps {
  totalMatchedPairs: number;
  pairsMatchedInCurrentSet: number;
  totalPairs: number;
  replayGame: () => void;
}

const GameBtn: React.FC<GameBtnProps> = ({ totalMatchedPairs, pairsMatchedInCurrentSet, totalPairs, replayGame }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-12">
      <Link href="../" passHref>
        <Button isIconOnly size="lg" color="warning" radius="sm">
          <BackIcon />
        </Button>
      </Link>
      
      <span className="w-14 h-14 flex items-center justify-center text-lg font-bold rounded-full bg-black text-white">
        {totalMatchedPairs + pairsMatchedInCurrentSet}/{totalPairs}
      </span>

      <Button
        isIconOnly
        size="lg"
        color="secondary"
        radius="sm"
        onClick={replayGame}
      >
        <ReplayIcon />
      </Button>
    </div>
  );
};

export default GameBtn;
