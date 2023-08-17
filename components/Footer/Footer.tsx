import { socialLinks } from "@/utils/constant";
import Link from "next/link";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full">
      <div className="container">
        <div className="w-full py-16 grid grid-cols-2 tab:grid-cols-3 xl:grid-cols-5">
          <div className="w-full flex flex-col items-start gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
