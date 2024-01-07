import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import Logo from "@/app/components/ui/Logo";

import { Button } from "@nextui-org/react";

const IndexPage: React.FC = () => {
  return (
    <Card shadow="lg" className="max-w-[400px] antialiased">
      <CardHeader className="flex justify-center text-center">
        <Logo />
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="text-center">
          <li className="my-3"><Link className="text-2xl" href="wordcards/renkler"><Button size="lg" className="min-w-48">Renkler</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/sayilar"><Button size="lg" className="min-w-48">Sayılar</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/basitfiiller"><Button size="lg" className="min-w-48">Basit Fiiller</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/basitfiiller2"><Button size="lg" className="min-w-48">Basit Fiiller v2</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/editoa1"><Button size="lg" className="min-w-48">Edito A1</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/editoa2"><Button size="lg" className="min-w-48">Edito A2</Button></Link></li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <p>&copy;</p> <a href="https://www.github.com/megerim">Mehmet Erim Gökhan</a>
      </CardFooter>
    </Card>
  );
};

export default IndexPage;
