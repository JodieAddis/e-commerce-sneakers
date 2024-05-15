import List from "../../typographies/List";
import IconClose from "../../icons/IconClose";
import IconLogo from "../../icons/IconLogo";
import IconMenu from "../../icons/IconMenu";

import { useRef, useState } from "react";
import Button from "../Button";
import { useClickOutside } from "../../hook/useClickOutside";

const Component = () => {
  const [isClicked, setIsClicked] = useState<boolean>(true);

  const navBarRef = useRef<HTMLDivElement>(null);

  useClickOutside({ setState: setIsClicked, ref: navBarRef });

  return (
    <div className="ml-8 mt-6 flex flex-row">
      <div className="mr-4 flex items-center">
        {isClicked ? (
          <Button
            content={
              <>
                <IconMenu />
              </>
            }
            onclick={() => {
              setIsClicked(false);
            }}
          />
        ) : (
          <div
            className="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-75"
            ref={navBarRef}
          >
            <div className="absolute left-0 top-0 z-10 h-screen w-64 bg-white p-8">
              <Button
                content={
                  <>
                    {" "}
                    <IconClose color="#000000" />
                  </>
                }
                css="mb-12"
                onclick={() => {
                  setIsClicked(true);
                }}
              />
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
