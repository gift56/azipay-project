import { ReactNode } from "react";
import Head from "next/head";
import { Footer, Navbar } from "@/components";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>EAZIPAY - Run your payroll easily in seconds</title>
        <meta
          name="description"
          content="We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="imgs/favicon.svg" sizes="1088x468" />
      </Head>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
