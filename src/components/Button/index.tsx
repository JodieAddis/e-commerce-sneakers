import { ReactNode } from "react";

interface ButtonProps {
  content: string | ReactNode;
  css?: string;
  onclick?: () => void;
}

const Component = ({ content, css, onclick }: ButtonProps) => {
  return (
    <button className={css} onClick={onclick}>
      {content}
    </button>
  );
};

export default Component;
