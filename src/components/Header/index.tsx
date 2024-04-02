import IconLogo from "../../icons/IconLogo";
import NavBar from "../NavBar";
import UserProfile from "../UserProfile";

const Component = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <IconLogo />
        <NavBar />
      </div>
      <div className="flex flex-row">
        <UserProfile />
      </div>
    </div>
  );
};

export default Component;
