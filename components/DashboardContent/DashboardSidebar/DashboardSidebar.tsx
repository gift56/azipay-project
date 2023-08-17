import { dashboardSideLink } from "@/utils/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";

const DashboardSidebar = () => {
  const router = useRouter();

  const activePath = (pathname: string) => {
    const currentPath = router.pathname;
    return (
      currentPath === pathname || currentPath.startsWith(pathname + "/detail")
    );
  };

  return (
    <nav className="hidden lg:flex flex-col gap-10 items-start justify-start w-full bg-white h-screen overflow-y-auto">
      <div className="w-full flex flex-col items-start justify-start sticky z-[1] top-[-15px] h-[4vh] bg-primary">
        <div>
          <img
            src="/imgs/dashboardLogo.png"
            alt="easypay_logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start h-[90vh] pt-20">
        {dashboardSideLink.map((item, index: any) => (
          <Link
            href={item.href}
            key={index}
            className={`${
              activePath(item.href)
                ? "border-l-2 border-l-primary bg-[#f0f7eb80] text-primary"
                : "text-dark"
            } border-b w-full flex items-center justify-between gap-5 px-3 py-3`}
          >
            <div className="flex items-center justify-start gap-3">
              <img src={item.img} alt="/" className="w-5 aspect-square" />
              <span className="text-base font-medium">{item.text}</span>
            </div>
            <span>
              <BiChevronDown />
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DashboardSidebar;
