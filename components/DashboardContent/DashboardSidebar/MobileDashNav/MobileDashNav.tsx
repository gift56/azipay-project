import Link from "next/link";
import { GoHomeFill } from "react-icons/go";

const MobileDashNav = () => {
  return (
    <nav className="lg:hidden w-full h-[90px] flex items-center justify-between gap-6">
      <Link
        href="/dashboard"
        className="w-full flex flex-col items-center justify-center text-primary text-sm font-medium"
      >
        <span>
          <GoHomeFill size={25} />
        </span>
        <span>Home</span>
      </Link>
    </nav>
  );
};

export default MobileDashNav;
