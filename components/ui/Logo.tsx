import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="m-2">
        <Link href={"/"}>
        <Image src={"/logo.png"} width={360} height={70} alt="Yeni Bir Dil! Logo" />
        </Link>
    </div>
  )
}

export default Logo