import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components";

const GetExclusive = () => {
  const [tabs, setTabs] = useState("individual");

  return (
    <section className="w-full relative">
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        src="/imgs/demoImg.svg"
        alt="/"
        className="absoulte top-20 w-[126px] md:w-[187px] aspect-square"
      />
      <div className="container">
        <div className="w-full flex flex-col tab:flex-row tab:justify-between gap-6 tab:items-center items-start justify-start pb-12">
          <div className="w-full tab:flex-1 flex flex-col items-start justify-start gap-8">
            <motion.h2
              initial={{ opacity: 0, y: "-30px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary md:text-4xl tab:text-[56px] tab:leading-[64px] font-play"
            >
              Get an Exclusive <br className="hidden tab:block" /> Demo of
              Eazipay
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "30px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-base font-normal text-gray1 md:text-lg tab:text-lg"
            >
              Our greatest priority is to put you and{" "}
              <br className="hidden tab:block" /> your business first. Let’s
              show you how
              <br className="hidden tab:block" /> we can help.
            </motion.p>
          </div>
          <div className="w-full tab:flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-6 w-full sm:w-[502px] p-5 shadow-contactShad bg-white border border-[#E7E8E7] rounded-3xl overflow-hidden"
            >
              <motion.h2
                initial={{ opacity: 0, y: "-30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-dark md:text-2xl"
              >
                First things first
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
                className="w-full text-center text-base font-normal text-[#444444] md:text-lg"
              >
                We want to serve you better. Tell us a bit{" "}
                <br className="hidden tab:block" /> about yourself or company
              </motion.p>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetExclusive;
