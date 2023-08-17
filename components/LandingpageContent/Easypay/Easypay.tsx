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
              <img src="/imgs/howImg.png" alt="how-images" className="w-[447px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easypay;
