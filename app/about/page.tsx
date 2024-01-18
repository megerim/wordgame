import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import Logo from "@/components/ui/Logo";
import Footer from "@/components/ui/Footer";

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
        <h3 className="text-center font-bold text-2xl">Kelimeleri öğütün!</h3>

        <p className="text-center mt-2">
          Fransızca öğrenim sürecinizi hem eğlenceli hem de etkili bir şekilde
          desteklemek istedik.
        </p>

        <ul className="list-inside mt-4 list-none">
          <li className="flex mb-2">
            <svg
              className="h-6 w-6 mr-2  flex-none fill-green-200/75 stroke-primary stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            Eğlenceli ve interaktif!
          </li>
          <li className="flex mb-2">
            <svg
              className="h-6 w-6 mr-2  flex-none fill-green-200/75 stroke-primary stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            Tamamen açık kaynaklı kod!
          </li>
          <li className="flex mb-2">
            <svg
              className="h-6 w-6 mr-2  flex-none fill-green-200/75 stroke-primary stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            Kullanıcı dostu ve ücretsiz!
          </li>
        </ul>

        <p className="text-center mt-4">
          Öneriler için:
          <br /> mehmeterimgokhan99@gmail.com <br />
          <Link href="mailto:mehmeterimgokhan99@gmail.com">Click to Mail!</Link>
        </p>

        <Link className="text-3xl my-5 flex justify-center" href="/">
          <Button size="lg" className="min-w-48">
            Ana Sayfaya Dön
          </Button>
        </Link>
        </div>
  );
}
