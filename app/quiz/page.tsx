import Logo from "@/components/ui/Logo";
import Footer from "@/components/ui/Footer";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";


import { Button } from "@nextui-org/react";

const QuizPage: React.FC = () => {
  return (
    <Card shadow="lg" className="max-w-[400px] antialiased">
      <CardHeader className="flex justify-center text-center">
      <Logo />
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="text-center">
          <li className="my-5"><Link className="text-2xl" href="/quiz/quiz1"><Button size="lg" className="min-w-48">Quiz 1</Button></Link></li>
          <li className="my-5"><Link className="text-2xl" href="/quiz/quiz2"><Button size="lg" className="min-w-48">Quiz 2</Button></Link></li>
          <li className="my-5"><Link className="text-3xl" href="/quiz/quiz3"><Button size="lg" className="min-w-48">Quiz 3</Button></Link></li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <Footer />
      </CardFooter>
    </Card>
  );
};

export default QuizPage;
