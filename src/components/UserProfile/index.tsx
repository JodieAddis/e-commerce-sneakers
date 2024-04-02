import IconCart from "../../icons/IconCart";
import ProfilePicture from "../../../public/assets/img/image-avatar.png";

const Component = () => {
  return (
    <>
      <div className="mr-10 flex items-center">
        <IconCart color="#000000" />
      </div>
      <img
        src={ProfilePicture}
        alt="Picture of the user"
        className="h-12 w-12 cursor-pointer rounded-full hover:border-2 hover:border-solid hover:border-Pumpkin"
      />
    </>
  );
};

export default Component;
