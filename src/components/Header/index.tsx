import NavBarDesktop from "../NavBarDesktop";
import NavBarMobile from "../NavBarMobile";
import UserProfile from "../UserProfile";
import useScreenSize from "../../hook/useScreenSize";

const Component = () => {
  const isMobile = useScreenSize();
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
      </div>
      <div className="mt-6 flex flex-row lg:mt-0">
        <UserProfile />
      </div>
    </div>
  );
};

export default Component;
