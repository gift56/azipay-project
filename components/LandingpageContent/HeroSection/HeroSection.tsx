import { Button } from "@/components";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full tab:bg-heroImg bg-no-repeat bg-[length:750px_500px] bg-[top_right_-7rem] relative">
      <div className="container">
        <div className="w-full flex items-center justify-between py-10 flex-col tab:flex-row gap-8">
          <div className="w-full tab:flex-1 flex flex-col items-start justify-start gap-8">
            <h2 className="text-3xl font-bold text-dark md:text-4xl tab:text-6xl font-play">
              Run your <span className="text-primary">payroll</span>{" "}
              <br className="hidden monitor:block" />
              <span className="text-army">easily</span> in{" "}
              <span className="text-danger">seconds</span>
            </h2>
            <p className="text-base font-normal text-gray1 md:text-lg tab:text-xl">
              {`We’ve built an all-inclusive simple solution for individual and
                businesses to manage staff, pay salaries, bills, and relevant
                taxes all at once.`}
            </p>
            <Link href="/dashboard">
              <Button
                text="Start Using Free, Forever"
                className="w-fit rounded-3xl !px-10 py-3 bg-primary text-white"
              />
            </Link>
            <div className="w-full flex flex-col items-start justify-start gap-6 mt-5">
              <h4 className="text-lg font-medium text-black">
                Download the Eazipay App
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-start gap-5">
                <Link href="/">
                  <Button
                    text={
                      <div className="flex items-center justify-start gap-5">
                        <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <img src="/icons/appleIcon.svg" alt="apple_logo" />
                        </span>
                        <div className="flex items-start flex-col justify-start">
                          <span className="text-xs font-medium text-gray1">
                            Download on the
                          </span>
                          <span className="text-lg text-gray1 font-bold">
                            Appstore
                          </span>
                        </div>
                      </div>
                    }
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link href="/">
                  <Button
                    text={
                      <div className="flex items-center justify-start gap-5">
                        <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <img
                            src="/icons/playstoreIcon.svg"
                            alt="playstore_logo"
                          />
                        </span>
                        <div className="flex items-start flex-col justify-start">
                          <span className="text-xs font-medium text-gray1">
                            Download on the
                          </span>
                          <span className="text-lg text-gray1 font-bold">
                            Google Play
                          </span>
                        </div>
                      </div>
                    }
                    className="bg-white rounded-md"
                  />
                </Link>
              </div>
            </div>
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
