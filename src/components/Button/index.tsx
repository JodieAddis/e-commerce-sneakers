interface ButtonProps {
  content: string;
  css: string;
}

const Component = ({ content, css }: ButtonProps) => {
  return <button className={css}>{content}</button>;
};

export default Component;
