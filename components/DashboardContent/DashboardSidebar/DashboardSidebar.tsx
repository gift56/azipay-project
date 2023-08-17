import { useRouter } from "next/router";

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
      <div className="w-full flex flex-col items-start justify-start sticky top-[-15px] z-[1] h-[7vh] bg-white">
        <div className="w-[122px] h-12">
          <img
            src="/imgs/dashboardLogo.png"
            alt="easypay_logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
