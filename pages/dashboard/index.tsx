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
            <img
              src="/icons/bell.svg"
              alt="bell_icons"
              className="w-6 aspect-square"
            />
            <span className="w-4 h-4 bg-danger rounded-full flex items-center justify-center text-xs font-bold text-white absolute -top-1 -right-1">
              7
            </span>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="/imgs/userAvatar.png"
              alt="/"
              className="w-[56px] aspect-square object-cover"
            />
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-base font-bold text-[#2B2B2B]">
                Kalu Abasiama
              </h2>
              <p className="text-sm font-medium text-[#898989]">Admin</p>
            </div>
          </div>
        </div>
      </header>
    </DashboardLayout>
  );
};

export default DashboardPage;
