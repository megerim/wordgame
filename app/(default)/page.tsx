import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import Image from "next/image";

import { Button } from "@nextui-org/react";

const IndexPage: React.FC = () => {
  return (
    <Card shadow="lg" className="max-w-[400px] antialiased">
      <CardHeader className="flex justify-center text-center">
        <Image src={"/logo.png"} className="m-5" width={1500} height={1250} alt="Yeni Bir Dil! Logo" />
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="text-center">
          <li className="my-5"><Link className="text-2xl" href="/wordcards"><Button size="lg" className="min-w-48">Word Cards</Button></Link></li>
          <li className="my-5"><Link className="text-3xl" href="/wordle"><Button size="lg" className="min-w-48">Wordle</Button></Link></li>
          <li className="my-5"><Link className="text-3xl" href="/about"><Button size="lg" className="min-w-48">About Us</Button></Link></li>
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
