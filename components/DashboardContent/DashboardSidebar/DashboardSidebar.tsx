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
    <nav className="hidden lg:flex w-full bg-white h-screen overflow-y-auto">
      DashboardSidebar
    </nav>
  );
};

export default DashboardSidebar;
