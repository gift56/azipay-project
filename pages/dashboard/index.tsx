import { Button } from "@/components";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const DashboardPage = () => {
  const [displayBaLance, setDisplayBaLance] = useState(false);

  return (
    <DashboardLayout>
      <header className="w-full bg-white px-5 tab:px-10 py-3 flex items-center justify-between gap-4 sticky top-0 z-10">
        <img
          src="/imgs/companyLogo.svg"
          alt="/"
          className="hidden tab:flex w-[110px] h-[58px] object-contain"
        />
        <div className="flex flex-row-reverse tab:flex-row items-center justify-end gap-10">
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
              <div className="hidden tab:flex items-center justify-between w-full text-[#898989] cursor-pointer">
                <p className="text-sm font-medium">Admin</p>
                <span>
                  <BiChevronRight size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full px-5 tab:px-10 py-8  flex flex-col items-start justify-start gap-7 bg-white tab:bg-transparent">
        <div className="hidden tab:flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-bold text-dark md:text-2xl tab:text-3xl">
            Welcome Abasiama
          </h2>
          <p className="text-base font-medium text-gray1">
            Pay and manage your employee in minutes
          </p>
        </div>
        <div className="w-full flex items-start justify-between gap-6">
          <div className="w-full lg:flex-[2] flex flex-col gap-6 items-start justify-start">
            <div className="w-full tab:w-[90%] flex flex-col tab:flex-row items-start gap-4 tab:items-end justify-between bg-primary bg-cardImg bg-no-repeat bg-[length_150%_120%] bg-[center_top_-2rem] tab:h-[150px] h-fit rounded-2xl text-white p-5">
              <div className="flex items-start flex-col gap-1 justify-start w-full tab:w-fit">
                <h4 className="text-base font-medium text-[#D9EBCD]">
                  Wallet Balance
                </h4>
                <div className="flex items-center justify-between w-full tab:w-fit tab:justify-start gap-2">
                  <h5 className="text-xl font-bold md:text-2xl">
                    {!displayBaLance ? "N12,560,078.00" : "XXXXXXXXXXX"}
                  </h5>

                  {!displayBaLance ? (
                    <img
                      src="/icons/eyeIcon.svg"
                      alt=""
                      className="cursor-pointer"
                      onClick={() => setDisplayBaLance((prev) => !prev)}
                    />
                  ) : (
                    <span
                      className="cursor-pointer"
                      onClick={() => setDisplayBaLance((prev) => !prev)}
                    >
                      <AiOutlineEyeInvisible size={20} />
                    </span>
                  )}
                </div>
              </div>
              <Button
                text="Fund Wallet"
                className="text-primary text-sm font-medium bg-[#D9EBCD] rounded-2xl !px-7 w-full tab:w-fit"
              />
            </div>
            <div className="hidden tab:grid grid-cols-4 items-start justify-start gap-6">
              
            </div>
          </div>
          <div className="w-full hidden lg:flex lg:flex-[0.5]"></div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
