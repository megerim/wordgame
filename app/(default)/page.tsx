
import { Button, Link } from "@nextui-org/react";
import ReactCountryFlag from "react-country-flag"

const IndexPage: React.FC = () => {
  return (
    <div>
      <ul className="text-center">
        <li className="my-5">
          <Link className="text-2xl" href="/en">
            <Button size="lg" className="min-w-48" endContent={<ReactCountryFlag countryCode="GB"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                    marginLeft: '0.5em',
                }}
                title="United Kingdom Flag"/>}>
              İngilizce
            </Button>
          </Link>
        </li>
        <li className="my-5">
          <Link className="text-2xl" href="/fr">
            <Button size="lg" className="min-w-48" endContent={<ReactCountryFlag countryCode="FR"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="French Flag"/>}>
              Fransızca
            </Button>
          </Link>
        </li>
        <li className="my-5">
          <Link className="text-3xl" href="/dnd">
            <Button size="lg" className="min-w-48">
              Drag&Drop
            </Button>
          </Link>
        </li>
        <li className="my-5">
          <Link className="text-3xl" href="/howto">
            <Button size="lg" className="min-w-48">
              Nasıl Çalışıyor?
            </Button>
          </Link>
        </li>
        <li className="my-5">
          <Link className="text-3xl" href="/about">
            <Button size="lg" className="min-w-48">
              Hakkımızda
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
