import IconCart from "../../icons/IconCart";
import ProfilePicture from "../../../public/assets/img/image-avatar.png";

const Component = () => {
  return (
    <>
      <div className="flex items-center mr-10">
        <IconCart />
      </div>
      <img
        src={ProfilePicture}
        alt="Picture of the user"
        className="w-12 h-12 border-Pumpkin border-solid border-2 rounded-full"
      />
    </>
  );
};

export default Component;
