import { Button, Link } from "@nextui-org/react";

const StudyFrench: React.FC = () => {
  return (
    <>
      <ul className="text-center">
        <li className="my-3">
          <Link className="text-2xl" href="/en/wordcards">
            <Button
              size="lg"
              color="default"
              variant="faded"
              className="min-w-64"
            >
              Kelime Kartları
            </Button>
          </Link>
        </li>
        <li className="my-3">
          <Link isDisabled className="text-2xl" href="/en/quiz">
            <Button
              size="lg"
              color="default"
              variant="faded"
              className="min-w-64"
            >
              Hızlı Test
            </Button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default StudyFrench;
