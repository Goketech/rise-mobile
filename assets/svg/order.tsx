import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface OrderIconProps extends SvgProps {
  width?: number;
  height?: number;
}

const OrderIcon = ({ width = 21, height = 23, ...props }: OrderIconProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke="#181725"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4.091 1.147-3 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14l-3-4h-12ZM1.091 5.147h18"
    />
    <Path
      stroke="#181725"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.091 9.147a4 4 0 1 1-8 0"
    />
  </Svg>
);
export default OrderIcon;
