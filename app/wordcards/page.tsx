import { Button, Link } from "@nextui-org/react";

const IndexPage: React.FC = () => {
  return (
    <>
        <ul className="text-center">
          <li className="my-3"><Link className="text-2xl" href="wordcards/renkler"><Button size="lg" color="default" variant="faded" className="min-w-64">Renkler&Sayılar</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/preposition"><Button size="lg" color="default" variant="faded" className="min-w-64">Prepositions&Frequency</Button></Link></li>
          <li className="my-3"><Link className="text-2xl" href="wordcards/basitfiiller"><Button size="lg" color="default" variant="faded" className="min-w-64">Basit Fiiller</Button></Link></li>
          <li className="my-3"><Button color="default" variant="faded" isDisabled size="lg" className="min-w-64">Basit Fiiller v2</Button></li>
          <li className="my-3"><Button color="default" variant="faded" isDisabled size="lg" className="min-w-64">Edito A1</Button></li>
          <li className="my-3"><Button color="default" variant="faded" isDisabled size="lg" className="min-w-64">Edito A2</Button></li>
        </ul>
        </>
  );
};

export default IndexPage;
