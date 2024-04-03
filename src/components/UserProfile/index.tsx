import IconCart from "../../icons/IconCart";
import ProfilePicture from "../../../public/assets/img/image-avatar.png";

const Component = () => {
  return (
    <>
      <div className="mr-6 flex cursor-pointer items-center lg:mr-10">
        <IconCart color="#69707D" />
      </div>
      <div className="mr-8 flex items-center lg:mr-0">
        <img
          src={ProfilePicture}
          alt="Picture of the user"
          className="h-6 w-6 cursor-pointer rounded-full hover:border-2 hover:border-solid hover:border-Pumpkin lg:h-12 lg:w-12"
        />
      </div>
    </>
  );
};

export default Component;
