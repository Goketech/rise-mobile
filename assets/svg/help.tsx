import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface HelpIconProps extends SvgProps {
  width?: number;
  height?: number;
}

const HelpIcon = ({ width = 21, height = 21, ...props }: HelpIconProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <Path
      fill="#181725"
      d="M10.092.854a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
    />
    <Path
      fill="#181725"
      d="M10.31 4.854a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0 1.5 1.5 0 1 1 1.5 1.5 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16a3.49 3.49 0 0 0-1-6.84ZM10.31 16.854a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
);
export default HelpIcon;
