const GetExclusive = () => {
  return (
    <section className="w-full relative">
      <img src="/imgs/demoImg.svg" alt="/" className="absoulte top-20 w-[126px] md:w-[187px] aspect-square" />
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
          <div className="w-full tab:flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default GetExclusive;
