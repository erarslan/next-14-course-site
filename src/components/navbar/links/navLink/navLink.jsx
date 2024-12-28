import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-2 font-medium rounded-3xl min-w-[90px] text-center ${
        pathName === item.path && "bg-white text-purple"
      } `}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
