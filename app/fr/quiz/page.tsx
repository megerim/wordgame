import { Button, Link } from "@nextui-org/react";

const QuizPage: React.FC = () => {
  return (
    <>
        <ul className="text-center">
          <li className="my-5"><Link className="text-3xl" href="/fr/quiz/quiz3"><Button size="lg" className="min-w-48">Basics</Button></Link></li>
          <li className="my-5"><Link isDisabled className="text-2xl" href="/fr/quiz/quiz1"><Button size="lg" className="min-w-48">COD</Button></Link></li>
          <li className="my-5"><Link isDisabled className="text-2xl" href="/fr/quiz/quiz2"><Button size="lg" className="min-w-48">COI</Button></Link></li>
        </ul>
      </>
  );
};

export default QuizPage;
