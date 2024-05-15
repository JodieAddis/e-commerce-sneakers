import Cart from "../Cart";
import NavBarDesktop from "../NavBarDesktop";
import NavBarMobile from "../NavBarMobile";
import UserProfile from "../UserProfile";
import useScreenSize from "../../hook/useScreenSize";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hook/useClickOutside";

const Component = () => {
  const isMobile = useScreenSize();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({ setState: setIsOpen, ref: dropdownRef });

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
      </div>
      <div className="mt-6 flex flex-row lg:mt-0" ref={dropdownRef}>
        <UserProfile onclick={handleClick} />
        <div className="absolute right-2  top-20 z-20 lg:right-20 lg:top-28">
          {isOpen && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default Component;
