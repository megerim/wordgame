import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="m-2">
        <Link href={"/"}>
        <Image src={"/logo.png"} width={1000} height={500} alt="Yeni Bir Dil! Logo" />
        </Link>
    </div>
  )
}

export default Logo