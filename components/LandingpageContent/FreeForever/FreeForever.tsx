import { motion } from "framer-motion";
import { Button } from "@/components";
import Link from "next/link";

const FreeForever = () => {
  return (
    <section className="w-full relative bg-[#FFE9E7] overflow-hidden">
      <div className="container">
        <motion.img
          initial={{ opacity: 0, y: "-30px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ type: "spring", duration: 2 }}
          viewport={{ once: true }}
          src="/icons/freeImg.svg"
          alt="/"
          className="absoulte top-0 w-[126px] aspect-square"
        />
        <div className="w-full flex flex-col tab:flex-row tab:justify-between gap-6 tab:items-center items-start justify-start py-16">
          <div className="w-full tab:flex-1 flex flex-col items-start justify-start gap-8">
            <motion.h2
              initial={{ opacity: 0, y: "-30px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-dark md:text-4xl tab:text-[56px] tab:leading-[64px] font-play"
            >
              Free forever <br className="hidden tab:block" /> for your{" "}
              <span className="text-danger">
                {" "}
                salary <br className="hidden tab:block" /> payment
              </span>
            </motion.h2>
            <div className="w-full flex flex-col items-start justify-start gap-6 mt-5">
              <motion.h4
                initial={{ opacity: 0, y: "-30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
                className="text-lg font-medium text-black"
              >
                Subscribe to the Eazilife today
              </motion.h4>
              <div className="flex flex-col md:flex-row items-center justify-start gap-5">
                <Link href="/">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
                </Link>
                <Link href="/">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full tab:flex-1">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/imgs/freeForeverImg.png"
              alt="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeForever;
