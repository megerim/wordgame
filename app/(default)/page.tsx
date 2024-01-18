
import { Button, Link } from "@nextui-org/react";

const IndexPage: React.FC = () => {
  return (
    <div>
      <ul className="text-center">
        <li className="my-5">
          <Link className="text-2xl" href="/wordcards">
            <Button size="lg" className="min-w-48">
              Kelime Kartları
            </Button>
          </Link>
        </li>
        <li className="my-5">
          <Link className="text-2xl" href="/quiz">
            <Button size="lg" className="min-w-48">
              Hızlı Test
            </Button>
          </Link>
        </li>
        <li className="my-5">
          <Link className="text-3xl" href="/about">
            <Button size="lg" className="min-w-48">
              Hakkımızda
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
