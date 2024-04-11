import List from "../../typographies/List";
import IconClose from "../../icons/IconClose";
import IconLogo from "../../icons/IconLogo";
import IconMenu from "../../icons/IconMenu";

import { useState } from "react";

const Component = () => {
  const [isClicked, setIsClicked] = useState<boolean>(true);
  return (
    <div className="ml-8 mt-6 flex flex-row">
      <div className="mr-4 flex items-center">
        {isClicked ? (
          <button
            onClick={() => {
              setIsClicked(false);
            }}
          >
            <IconMenu />
          </button>
        ) : (
          <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-75">
            <div className="absolute left-0 top-0 z-10 h-screen w-64 bg-white p-8">
              <button
                onClick={() => {
                  setIsClicked(true);
                }}
                className="mb-12"
              >
                <IconClose color="#000000" />
              </button>
              <ul>
                <List content="collection" css="navbar_mobile my-4" />
                <List content="men" css="navbar_mobile my-4" />
                <List content="women" css="navbar_mobile my-4" />
                <List content="about" css="navbar_mobile my-4" />
                <List content="contact" css="navbar_mobile my-4" />
              </ul>
            </div>
          </div>
        )}
      </div>
      <IconLogo />
    </div>
  );
};

export default Component;
