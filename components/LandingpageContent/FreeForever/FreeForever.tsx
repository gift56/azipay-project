const FreeForever = () => {
  return (
    <section className="w-full relative bg-[#FFE9E7]">
      <div className="container">
        <div className="w-full flex flex-col tab:flex-row tab:justify-between gap-6 tab:items-center items-start justify-start py-28">
          <div className="w-full tab:flex-1 flex flex-col items-start justify-start gap-8">
            <h2 className="text-3xl font-bold text-dark md:text-4xl tab:text-[56px] tab:leading-[64px] font-play">
              Free forever <br className="hidden tab:block" /> for your{" "}
              <span className="text-danger">
                {" "}
                salary <br className="hidden tab:block" /> payment
              </span>
            </h2>
          </div>
          <div className="w-full tab:flex-1">
            <img src="/imgs/freeForeverImg.png" alt="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeForever;
