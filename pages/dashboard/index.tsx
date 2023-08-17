import DashboardLayout from "@/layouts/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <header className="w-full bg-white px-10 py-3 flex items-center justify-between gap-4">
        <img
          src="/imgs/companyLogo.svg"
          alt="/"
          className="hidden tab:flex w-[110px] h-[58px] object-contain"
        />
        <div className="flex items-center justify-end gap-10">
          
        </div>
      </header>
    </DashboardLayout>
  );
};

export default DashboardPage;
