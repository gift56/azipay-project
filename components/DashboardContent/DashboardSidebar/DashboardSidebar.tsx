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
    <nav className="hidden lg:flex flex-col gap-10 items-start justify-start w-full bg-white h-screen overflow-y-auto scrolltiny">
      <div className="w-full flex flex-col items-start justify-start sticky z-[1] top-[-15px] h-[4vh] bg-primary">
        <div className="w-full">
          <img
            onClick={() => router.push("/")}
            src="/imgs/dashboardLogo.png"
            alt="easypay_logo"
            className="w-full h-auto object-cover cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start h-[90vh] pt-28 scrolltiny">
        {dashboardSideLink.map((item, index: any) => (
          <Link
            href={item.href}
            key={index}
            className={`${
              activePath(item.href)
                ? "border-l-2 border-l-primary bg-[#f0f7eb80] text-primary"
                : "text-dark"
            } border-b w-full flex items-center justify-between gap-5 px-3 py-3 hover:border-l-2 hover:border-l-primary hover:bg-[#f0f7eb80] hover:text-primary transition-all`}
          >
            <div className="flex items-center justify-start gap-3">
              <img src={item.img} alt="/" className="w-5 aspect-square" />
              <span className="text-base font-medium">{item.text}</span>
            </div>
            <span className={`${item.drop === true ? "flex" : "hidden"}`}>
              <BiChevronDown size={25} />
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DashboardSidebar;
