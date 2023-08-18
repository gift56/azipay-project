import { motion } from "framer-motion";

const Individual = () => {
  return (
    <section className="w-full py-20 bg-[#F0F7EB]">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <motion.h2
              initial={{ opacity: 0, y: "-30px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="font-play font-bold text-2xl text-center md:text-4xl text-primary"
            >
              For Individuals and Businesses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-base font-normal text-dark text-center"
            >
              Join 200+ businesses using Eazipay's easy solution.
            </motion.p>
          </div>
          <div className="relative w-full flex items-center justify-center flex-col gap-6 tab:gap-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full tab:w-[480px] tab:h-[280px] p-6 bg-primary text-white rounded-2xl flex flex-col items-start justify-start gap-6 tab:absolute tab:left-6"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="w-full tab:w-[540px] tab:h-[280px] p-6 bg-primary shadow-cardShad text-white rounded-2xl flex flex-col items-start justify-start gap-6 tab:relative tab:z-20"
            >
              <h2 className="text-lg font-bold sm:text-xl tab:text-2xl">
                All Payroll, Anytime Anywhere
              </h2>
              <p className="flex flex-col items-start justify-start gap-3 text-base font-normal md:text-lg">
                <span>
                  Wherever you are Eazipay has got you covered on ALL your
                  Payroll tasks.
                </span>
                <span>
                  Whether it is Taxes, Pension insurances HMOs, trustfunds,
                  Eazipay handle all your compliamces in one place and easily,
                  in seconds!
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.92, delay: 0.6 }}
              className="w-full tab:w-[540px] tab:h-[280px] p-6 bg-primary shadow-cardShad text-white rounded-2xl flex flex-col items-start justify-start gap-6 tab:absolute tab:right-0 tab:z-30"
            >
              <h2 className="text-lg font-bold sm:text-xl tab:text-2xl">
                Payroll in Seconds
              </h2>
              <p className="flex flex-col items-start justify-start gap-3 text-base font-normal md:text-lg">
                <span>
                  Never again wil you spend more than 2 minutes on payroll.
                </span>
                <span>
                  Just click on your staff annd bulk-pay them at once.
                </span>
                <span>Payment is done permanently.</span>
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ type: "spring", duration: 3 }}
            viewport={{ once: true }}
            className="text-base font-normal text-center text-gray1 tab:text-lg"
          >
            <span>
              We are happy to answer your queries. Please, reach us at
            </span>
            <span className="block">
              <span className="text-danger">hello@myeazipay.com</span> and
              expect our response shortly after.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Individual;
