import IconLogo from "../../icons/IconLogo";
import List from "../../typographies/List";

const Component = () => {
  return (
    <>
      <IconLogo />
      <div className="ml-8">
        <ul className="flex flex-row">
          <List content="collection" css="navbar_desktop" />
          <List content="men" css="navbar_desktop" />
          <List content="women" css="navbar_desktop" />
          <List content="about" css="navbar_desktop" />
          <List content="contact" css="navbar_desktop" />
        </ul>
      </div>
    </>
  );
};

export default Component;
