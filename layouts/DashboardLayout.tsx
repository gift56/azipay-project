import { ReactNode } from "react";
import Head from "next/head";
import { DashboardSidebar, MobileDashNav } from "@/components";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>EAZIPAY - Dashboard</title>
        <meta
          name="description"
          content="We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="imgs/favicon.svg" sizes="1088x468" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="w-full flex items-start justify-start h-screen overflow-auto lg:overflow-hidden bg-[#F9FAFC]">
        <div className="w-full fixed bottom-0 bg-white lg:relative lg:flex-[0.5]">
          <DashboardSidebar />
          <MobileDashNav />
        </div>
        <div className="lg:flex-[2] w-full">{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
