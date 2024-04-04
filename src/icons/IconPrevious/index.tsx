import { IconWidthProps } from "../../types";

const Icon = ({ width, height }: IconWidthProps) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 1 3 9l8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

export default Icon;
