import { Button } from "@/components";
import { useState } from "react";

const GetExclusive = () => {
  const [tabs, setTabs] = useState("individual");

  return (
    <section className="w-full relative">
      <img
        src="/imgs/demoImg.svg"
        alt="/"
        className="absoulte top-20 w-[126px] md:w-[187px] aspect-square"
      />
      <div className="container">
        <div className="w-full flex flex-col tab:flex-row tab:justify-between gap-6 tab:items-center items-start justify-start pb-12">
          <div className="w-full tab:flex-1 flex flex-col items-start justify-start gap-8">
            <h2 className="text-3xl font-bold text-primary md:text-4xl tab:text-[56px] tab:leading-[64px] font-play">
              Get an Exclusive <br className="hidden tab:block" /> Demo of
              Eazipay
            </h2>
            <p className="text-base font-normal text-gray1 md:text-lg tab:text-lg">
              Our greatest priority is to put you and{" "}
              <br className="hidden tab:block" /> your business first. Let’s
              show you how
              <br className="hidden tab:block" /> we can help.
            </p>
          </div>
          <div className="w-full tab:flex-1">
            <div className="flex flex-col items-center justify-center gap-6 w-full sm:w-[502px] p-5 shadow-contactShad bg-white border border-[#E7E8E7] rounded-3xl">
              <h2 className="text-xl font-bold text-dark md:text-2xl">
                First things first
              </h2>
              <p className="w-full text-center text-base font-normal text-[#444444] md:text-lg">
                We want to serve you better. Tell us a bit{" "}
                <br className="hidden tab:block" /> about yourself or company
              </p>
              <div className="w-full flex items-center justify-between gap-4 border border-[#E7E8E7] bg-white p-2 rounded-2xl">
                <h4
                  onClick={() => setTabs("individual")}
                  className={`${
                    tabs === "individual"
                      ? "bg-primary text-white"
                      : "bg-[#F2F1F1] text-gray1"
                  } transition-all duration-300 w-[50%] rounded-xl flex items-center justify-center text-center text-base font-medium py-2 tracking-[0.1px] cursor-pointer`}
                >
                  Individual
                </h4>
                <h4
                  onClick={() => setTabs("company")}
                  className={`${
                    tabs === "company"
                      ? "bg-primary text-white"
                      : "bg-[#F2F1F1] text-gray1"
                  } transition-all duration-300 w-[50%] rounded-xl flex items-center justify-center text-center text-base font-medium py-2 tracking-[0.1px] cursor-pointer`}
                >
                  Company
                </h4>
              </div>

              <div className="w-full flex flex-col items-start justify-start gap-5">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="outline-none w-full border border-[#8D8E8D] text-base text-[#8D8E8D] font-normal px-4 h-12 rounded-2xl focus:border-primary placeholder:text-[#8D8E8D] placeholder:text-base"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="outline-none w-full border border-[#8D8E8D] text-base text-[#8D8E8D] font-normal px-4 h-12 rounded-2xl focus:border-primary placeholder:text-[#8D8E8D] placeholder:text-base"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="outline-none w-full border border-[#8D8E8D] text-base text-[#8D8E8D] font-normal px-4 h-12 rounded-2xl focus:border-primary placeholder:text-[#8D8E8D] placeholder:text-base"
                />
                <input
                  type="text"
                  name="job_title"
                  placeholder="Job Tittle"
                  className="outline-none w-full border border-[#8D8E8D] text-base text-[#8D8E8D] font-normal px-4 h-12 rounded-2xl focus:border-primary placeholder:text-[#8D8E8D] placeholder:text-base"
                />
                <input
                  type="text"
                  name="company_size"
                  placeholder="Company Size"
                  className="outline-none w-full border border-[#8D8E8D] text-base text-[#8D8E8D] font-normal px-4 h-12 rounded-2xl focus:border-primary placeholder:text-[#8D8E8D] placeholder:text-base"
                />
                <Button
                  text="Request Demo"
                  className="w-full bg-primary border-primary rounded-3xl text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetExclusive;
