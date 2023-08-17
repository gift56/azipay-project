import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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
    <header className="w-full sticky bg-white top-8">
      <div className="container">
        <div className="w-full flex items-center justify-between gap-5">
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
