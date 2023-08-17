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
            <div className="w-fit p-6 bg-primary text-white rounded-2xl flex flex-col items-start justify-start gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Individual;
