import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface BellIconProps extends SvgProps {
  width?: number;
  height?: number;
}

const BellIcon = ({ width = 19, height = 21, ...props }: BellIconProps) => (
  <Svg width={19} height={21} fill="none" {...props}>
    <Path
      fill="#181725"
      d="m17.611 13.354-1.8-1.81v-4.46a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.619 6.67v4.67l-1.8 1.81a1.64 1.64 0 0 0 1.16 2.79h3.36v.34a3.84 3.84 0 0 0 4 3.66 3.84 3.84 0 0 0 4-3.66v-.34h3.36a1.64 1.64 0 0 0 1.16-2.79Zm-6.52 3.13a1.88 1.88 0 0 1-2 1.66 1.88 1.88 0 0 1-2-1.66v-.34h4v.34Zm-8.489-2.34 1.18-1.18a2 2 0 0 0 .59-1.42v-4.67a4.73 4.73 0 0 1 1.62-3.56 4.67 4.67 0 0 1 3.74-1.17 4.86 4.86 0 0 1 4.08 4.9v4.5a2.001 2.001 0 0 0 .58 1.42l1.19 1.18H2.601Z"
    />
  </Svg>
);
export default BellIcon;
