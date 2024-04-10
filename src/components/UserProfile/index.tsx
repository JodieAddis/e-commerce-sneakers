import IconCart from "../../icons/IconCart";
import ProfilePicture from "../../../public/assets/img/image-avatar.png";
import { useContext } from "react";
import { CountContext } from "../../context/CountProductsContext";

interface UserProfileProps {
  onclick: () => void;
}

const Component = ({ onclick }: UserProfileProps) => {
  const { count } = useContext(CountContext);
  return (
    <>
      <div className="mr-6 flex cursor-pointer items-center lg:mr-10">
        <button onClick={onclick}>
          <div className="absolute right-16 top-4 my-1 rounded-lg bg-Pumpkin px-2 text-center text-[10px] font-bold text-white lg:right-52 lg:top-9">
            {count}
          </div>
          <IconCart color="#69707D" />
        </button>
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
