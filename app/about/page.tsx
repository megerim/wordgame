
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import Image from "next/image";

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <Card shadow="lg" className="max-w-[400px] antialiased">
    <CardHeader className="flex justify-center text-center">
      <Image src={"/logo.png"} className="m-5" width={1500} height={1250} alt="Yeni Bir Dil! Logo" />
    </CardHeader>
    <Divider />
    <CardBody className="flex items-center justify-center">
      
    <h3 className="text-center font-bold text-2xl">Kelimeleri öğütün!</h3>

<p className="text-center mt-2">
  Fransızca öğrenim sürecinizi hem eğlenceli hem de etkili bir şekilde desteklemek istedik.
</p>

<ul className="list-inside mt-4 list-none">
  <li><span className="text-green-500">✔️</span> Eğlenceli ve interaktif öğrenme deneyimi!</li>
  <li><span className="text-green-500">✔️</span> Tamamen açık kaynaklı kod!</li>
  <li><span className="text-green-500">✔️</span> Kullanıcı dostu ve ücretsiz!</li>
</ul>

<p className="text-center mt-4">
  Adım adım kelimeler arasında ilerleyin ve öğrenin!
</p>


        <Link className="text-3xl" href="/"><Button size="lg" className="min-w-48">Ana Sayfaya Dön</Button></Link>
      
    </CardBody>
    <Divider />
    <CardFooter className="flex justify-center">
      <p>&copy;</p> <a href="https://www.github.com/megerim">Mehmet Erim Gökhan</a>
    </CardFooter>
  </Card>
  )
}
