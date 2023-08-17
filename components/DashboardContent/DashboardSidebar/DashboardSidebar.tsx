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
edwcsdsdd
      </div>
    </nav>
  );
};

export default DashboardSidebar;
