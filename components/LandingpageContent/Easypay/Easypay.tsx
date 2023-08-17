import React from "react";

const Easypay = () => {
  return (
    <section className="w-full py-20">
      <div className="container">
        <div className="flex flex-col gap-10 items-center justify-center w-full">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h2 className="font-play font-bold text-2xl text-center md:text-4xl text-primary">
              How Eazipay Works
            </h2>
            <p className="text-base font-normal text-dark text-center">
              Get started in 3 simple steps.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center tab:flex-row tab:justify-between gap-6">
            <div className="w-full tab:flex-1">
              <img
                src="/imgs/howImg.png"
                alt="how-images"
                className="w-[447px]"
              />
            </div>
            <div className="w-full tab:flex-1 flex flex-col relative">
              <div className="flex flex-col items-start justify-start gap-4">
                <span className="md:w-14 md:h-14 w-12 h-12 flex items-center justify-center bg-primary text-white rounded-2xl text-xl font-bold md:text-2xl shadow-cardShad">
                  1
                </span>
                <div>
                  <h2 className="text-base font-bold text-gray1 md:text-lg tab:text-xl">
                    Create your free account
                  </h2>
                  <p className="text-sm font-normal md:text-base text-gray1">
                    Click here to set up your Eazipay account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easypay;
