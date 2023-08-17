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
          <div className="relative">
            <img src="/icons/bell.svg" alt="bell_icons" className="w-6 aspect-square" />
            <span className="w-4 h-4 bg-danger rounded-full flex items-center justify-center text-xs font-bold text-white absolute top-0 right-0">7</span>
          </div>
        </div>
      </header>
    </DashboardLayout>
  );
};

export default DashboardPage;
