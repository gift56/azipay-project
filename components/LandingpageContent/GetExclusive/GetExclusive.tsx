const GetExclusive = () => {
  return (
    <section className="w-full relative">
      <img
        src="/imgs/demoImg.svg"
        alt="/"
        className="absoulte top-20 w-[126px] md:w-[187px] aspect-square"
      />
      <div className="container">
        <div className="w-full flex flex-col tab:flex-row tab:justify-between gap-6 tab:items-center items-start justify-start py-12 tab:py-28">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetExclusive;
