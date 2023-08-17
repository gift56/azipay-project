import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";

const MobileDashNav = () => {
  return (
    <nav className="lg:hidden w-full h-[90px] flex items-center justify-between gap-6 px-2">
      <Link
        href="/dashboard"
        className="w-full flex flex-col items-center justify-center text-primary text-sm font-medium"
      >
        <span>
          <GoHomeFill size={25} />
        </span>
        <span>Home</span>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col items-center justify-center text-gray1 text-sm font-medium"
      >
        <img src="/icons/icon3.svg" alt="/" />
        <span>Employee</span>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col items-center justify-center text-gray1 text-sm font-medium"
      >
        <img src="/icons/icon4.svg" alt="/" />
        <span>Payroll</span>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col items-center justify-center text-gray1 text-sm font-medium"
      >
        <span>
          <CiGrid41 size={25} />
        </span>
        <span>More</span>
      </Link>
    </nav>
  );
};

export default MobileDashNav;
