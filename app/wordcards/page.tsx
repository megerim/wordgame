import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import Logo from "@/components/ui/Logo";

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
          <li className="my-3"><Link className="text-2xl" href="wordcards/renkler"><Button size="lg" color="default" variant="faded" className="min-w-64">Renkler&Sayılar</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/preposition"><Button size="lg" color="default" variant="faded" className="min-w-64">Prepositions&Frequency</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/basitfiiller"><Button size="lg" color="default" variant="faded" className="min-w-64">Basit Fiiller</Button></Link></li>
          <li className="my-3"><Button color="default" variant="faded" isDisabled size="lg" className="min-w-64">Basit Fiiller v2</Button></li>
          <li className="my-3"><Button color="default" variant="faded" isDisabled size="lg" className="min-w-64">Edito A1</Button></li>
          <li className="my-3"><Button color="default" variant="faded" isDisabled size="lg" className="min-w-64">Edito A2</Button></li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <p className="text-xs mr-2">Bilmiyorsanız, kelime kartına 3 kez tıklayın.</p>
        <Link href="https://www.github.com/megerim">Github</Link>
      </CardFooter>
    </Card>
  );
};

export default IndexPage;
