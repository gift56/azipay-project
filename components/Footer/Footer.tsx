import Link from "next/link";

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
            <p className="flex flex-col items-start justify-start w-full text-gray1 text-sm font-normal">
              <span>Copyright © {year} Eazipay.</span>
              <span>All rights reserved</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
