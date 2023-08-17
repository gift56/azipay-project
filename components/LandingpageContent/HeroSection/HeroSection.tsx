import { Button } from "@/components";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-heroImg bg-no-repeat bg-right bg-[length:670px_500px]">
      <div className="container">
        <div className="w-full flex items-center justify-center py-10 tab:h-[90vh] flex-col tab:flex-row gap-8">
          <div className="w-full tab:flex-1 flex flex-col items-start justify-start gap-8">
            <h2 className="text-3xl font-bold text-dark md:text-4xl tab:text-6xl font-play">
              Run your <span className="text-primary">payroll</span>{" "}
              <span className="text-army">easily</span> in{" "}
              <span className="text-danger">seconds</span>
            </h2>
            <p className="text-base font-normal text-gray1 md:text-lg tab:text-lg">
              {`We’ve built an all-inclusive simple solution for individual and
                businesses to manage staff, pay salaries, bills, and relevant
                taxes all at once.`}
            </p>
            <Link href="/">
              <Button text="Start Using Free, Forever" className="" />
            </Link>
          </div>
          <div className="w-full tab:flex-1">
            <img
              src="/imgs/heroImg.png"
              alt="hero-image"
              className="tab:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
