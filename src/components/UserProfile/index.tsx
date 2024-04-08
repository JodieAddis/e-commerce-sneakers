import IconCart from "../../icons/IconCart";
import ProfilePicture from "../../../public/assets/img/image-avatar.png";

const Component = () => {
  return (
    <>
      <div className="mr-6 flex cursor-pointer items-center lg:mr-10">
        {/* <div className="h-3 w-5 rounded-lg bg-Pumpkin text-center text-xs font-bold text-white">
          <p>3</p>
        </div> */}
        <IconCart color="#69707D" />
      </div>
      <div className="mr-8 flex items-center lg:mr-0">
        <img
          src={ProfilePicture}
          alt="Picture of the user"
          className="h-6 w-6 cursor-pointer rounded-full border-2 border-solid border-white hover:border-Pumpkin lg:h-12 lg:w-12"
        />
      </div>
    </>
  );
};

export default Component;
