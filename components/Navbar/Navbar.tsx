
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Button } from "..";
import { navLinks } from "@/utils/constant";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full sticky bg-white top-0 z-30">
      <div className="w-full mx-auto tab:w-[95%] lg:w-[75%] relative">
        <div className="w-full flex items-center justify-between gap-5 py-4 px-6 tab:px-0">
          <Link href="/">
            <img src="/imgs/logo.svg" alt="Easypay-logo" />
          </Link>
          <nav className="hidden tab:flex items-center justify-center gap-6">
            {navLinks.map((item, index: any) => (
              <Link
                href={item.href}
                key={index}
                className="text-base font-medium text-gray1 hover:text-primary transition-all"
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <div className="hidden tab:flex items-center gap-7">
            <Link href="/">
              <Button
                text="Log in"
                className="text-primary border-primary tab:w-[148px] lg:w-[168px] rounded-3xl"
              />
            </Link>
            <Link href="/">
              <Button
                text="Register"
                className="text-white border-primary bg-primary tab:w-[148px] lg:w-[168px] rounded-3xl"
              />
            </Link>
          </div>
          <span
            onClick={() => setMobileNav(true)}
            className="text-dark tab:hidden"
          >
            {mobileNav === false && <FaBars size={25} />}
          </span>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-[180%]"
          } tab:hidden flex flex-col h-screen bg-black/40 gap-7 absolute top-0 w-full z-40 transition-all duration-300 `}
        >
          <div
            ref={modalRef}
            className="flex flex-col h-full bg-white gap-5 p-4 w-[250px]"
          >
            <div className="w-full flex items-center justify-end">
              <span className="text-dark" onClick={() => setMobileNav(false)}>
                <MdClose size={25} />
              </span>
            </div>

            <nav className="flex flex-col items-start justify-start gap-6 w-full">
              {navLinks.map((item, index: any) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-base font-medium text-gray1 hover:text-primary transition-all w-full"
                >
                  {item.text}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col items-start gap-5 w-full">
              <Link href="/">
                <Button
                  text="Log in"
                  className="text-primary border-primary w-[168px] rounded-[24px]"
                />
              </Link>
              <Link href="/">
                <Button
                  text="Register"
                  className="text-white border-primary bg-primary w-[168px] rounded-[24px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
