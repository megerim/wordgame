import Logo from "@/components/ui/Logo";
import Footer from "@/components/ui/Footer";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";


import { Button } from "@nextui-org/react";

const IndexPage: React.FC = () => {
  return (
    <Card shadow="lg" className="max-w-[400px] mx-5 antialiased">
      <CardHeader className="flex justify-center text-center">
      <Logo />
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="text-center">
          <li className="my-5"><Link className="text-2xl" href="/wordcards"><Button size="lg" className="min-w-48">Word Cards</Button></Link></li>
          <li className="my-5"><Link className="text-2xl" href="/quiz"><Button size="lg" className="min-w-48">Quick Quiz</Button></Link></li>
          <li className="my-5"><Link className="text-3xl" href="/about"><Button size="lg" className="min-w-48">About Us</Button></Link></li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <Footer />
      </CardFooter>
    </Card>
  );
};

export default IndexPage;
