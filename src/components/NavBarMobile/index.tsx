import IconLogo from "../../icons/IconLogo";
import IconMenu from "../../icons/IconMenu";

const Component = () => {
  return (
    <div className="ml-8 mt-6 flex flex-row">
      <div className="mr-4 flex items-center">
        <IconMenu />
      </div>
      <IconLogo />
    </div>
  );
};

export default Component;
