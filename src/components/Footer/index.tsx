import IconNetwork from "../../icons/IconNetwork";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <Paragraph
        content={
          <>
            Application coded by Jodie{" "}
            <a
              href="https://github.com/JodieAddis"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3"
            >
              <IconNetwork name="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/jodieaddis/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 "
            >
              <IconNetwork name="linkedin" />
            </a>
          </>
        }
        css="mb-3 flex items-center text-sm"
      />
    </>
  );
};

export default Component;
