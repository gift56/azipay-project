import Link from "next/link";
import { GoHomeFill } from "react-icons/go";

const MobileDashNav = () => {
  return (
    <nav className="lg:hidden w-full h-[110px] flex items-center justify-between gap-6">
      <Link
        href="/dashboard"
        className="w-full flex flex-col items-center justify-center gap-1 text-primary text-sm font-medium"
      >
        <span>
          <GoHomeFill size={20} />
        </span>
        <span>Home</span>
      </Link>
    </nav>
  );
};

export default MobileDashNav;
