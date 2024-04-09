import NavBarDesktop from "../NavBarDesktop";
import NavBarMobile from "../NavBarMobile";
import UserProfile from "../UserProfile";
import useScreenSize from "../../hook/useScreenSize";
import Cart from "../Cart";
import { useState } from "react";

const Component = () => {
  const isMobile = useScreenSize();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
      </div>
      <div className="mt-6 flex flex-row lg:mt-0">
        <UserProfile onclick={handleClick} />
        <div className="absolute right-20 top-28">{isOpen && <Cart />}</div>
      </div>
    </div>
  );
};

export default Component;
