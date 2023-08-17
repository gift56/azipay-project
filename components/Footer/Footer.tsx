import { footerLinks, socialLinks } from "@/utils/constant";
import Link from "next/link";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full border-t border-[#EAEAEA]">
      <div className="container">
        <div className="w-full py-16 flex flex-col tab:flex-row justify-between items-start gap-7 tab:gap-0">
          <div className="w-full tab:flex-[1] flex flex-col items-start gap-4">
            <Link href="/">
              <img
                src="/imgs/darkLogo.svg"
                alt="Easypay-logo"
                className="w-[122px]"
              />
            </Link>
            <p className="flex flex-col items-start justify-start w-full text-gray1 text-base font-normal">
              <span>Copyright © {year} Eazipay.</span>
              <span>All rights reserved</span>
            </p>
            <div className="w-full flex flex-wrap gap-4">
              {socialLinks.map((item, index: any) => (
                <Link
                  href={item.href}
                  key={index}
                  className="w-8 h-8 flex items-center justify-center text-gray1 bg-gray-200 rounded-full"
                >
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 tab:grid-cols-3 xl:grid-cols-4 w-full tab:flex-[2] gap-6 relative">
            {footerLinks.map((item, index: any) => (
              <div
                className="w-full flex flex-col items-start gap-4"
                key={index}
              >
                <h2 className="text-xl font-medium text-dark">
                  {item.headingTitle}
                </h2>
                <nav className="flex flex-col items-start justify-start gap-5">
                  {item.links.map((item, index: any) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-base font-normal text-[#7C7C7C] hover:text-primary"
                    >
                      {item.text}
                    </Link>
                  ))}
                  <div
                    className={`w-full h-10 px-4 bg-[#F2F1F1]  items-center justify-between gap-4 rounded-2xl ${
                      item.headingTitle === "Contact us" ? "flex" : "hidden"
                    }`}
                  >
                    <input
                      type="text"
                      className="w-full h-full outline-none border-none text-sm font-normal bg-transparent placeholder:text-gray1 text-gray1 font-samp"
                      placeholder="Your email address"
                    />
                    <span className="cursor-pointer">
                      <BsSend size={17} />
                    </span>
                  </div>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
