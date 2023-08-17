import { navLinks } from "@/utils/constant";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Button } from "..";

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
    <header className="w-full sticky bg-white top-0">
      <div className="container">
        <div className="w-full flex items-center justify-between gap-5 py-4">
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
          <span
            onClick={() => setMobileNav(true)}
            className="text-dark tab:hidden"
          >
            {mobileNav === false && <FaBars size={25} />}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
