import React from "react";

const Individual = () => {
  return (
    <section className="w-full py-20 bg-individualImg bg-[#F0F7EB] bg-no-repeat bg-cover">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-play font-bold text-2xl text-center md:text-4xl text-primary">
              For Individuals and Businesses
            </h2>
            <p className="text-base font-normal text-dark">
              Join 200+ businesses using Eazipay's easy solution.
            </p>
          </div>
          <div className="relative w-full flex items-center justify-center flex-col gap-6 tab:gap-0">
            <div className="w-full tab:w-[480px] p-6 bg-primary text-white rounded-2xl flex flex-col items-start justify-start gap-6">
              <h2 className="text-lg font-bold sm:text-xl tab:text-2xl">
                Tamper-proof Payroll for LIfe
              </h2>
              <p className="flex flex-col items-start justify-start gap-3 text-base font-normal md:text-lg">
                <span>
                  Your staff payroll history is kept in one place forever.
                </span>
                <span>No more excel sheet or manual records.</span>
                <span>Download your payroll history anytime you need it.</span>
              </p>
            </div>
            <div className="w-full tab:w-[540px] p-6 bg-primary text-white rounded-2xl flex flex-col items-start justify-start gap-6">
              <h2 className="text-lg font-bold sm:text-xl tab:text-2xl">
                All Payroll, Anytime Anywhere
              </h2>
              <p className="flex flex-col items-start justify-start gap-3 text-base font-normal md:text-lg">
                <span>
                  Wherever you are Eazipay has got you covered on ALL your
                  Payroll tasks.
                </span>
                <span>
                  Whether it is Taxes, Pension insurances HMOs, trustfunds,
                  Eazipay handle all your compliamces in one place and easily,
                  in seconds!
                </span>
              </p>
            </div>
            <div className="w-full tab:w-[540px] p-6 bg-primary text-white rounded-2xl flex flex-col items-start justify-start gap-6">
              <h2 className="text-lg font-bold sm:text-xl tab:text-2xl">
                Payroll in Seconds
              </h2>
              <p className="flex flex-col items-start justify-start gap-3 text-base font-normal md:text-lg">
                <span>
                  Never again wil you spend more than 2 minutes on payroll.
                </span>
                <span>
                  Just click on your staff annd bulk-pay them at once.
                </span>
                <span>Payment is done permanently.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Individual;
