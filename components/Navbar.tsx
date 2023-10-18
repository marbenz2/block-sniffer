import Image from "next/image";
import Apptime from "@/components/Apptime";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-slate-800 flex items-center px-2 text-white shadow-lg border-b border-lime-400">
      <div className="flex w-full justify-between items-center">
        <Link href="/">
          <Image
            src="/01-Logotype_Negativo_RGB.png"
            alt="vechain-logo"
            width={100}
            height={100}
          />
        </Link>
        <Apptime />
      </div>
    </nav>
  );
};

export default Navbar;
