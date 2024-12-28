import { auth } from "@/lib/auth";
import Links from "./links/Links";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="h-[100px] flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        Lama
      </Link>
      <Links session={session} />
    </div>
  );
};

export default Navbar;
