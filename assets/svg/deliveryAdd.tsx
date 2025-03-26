import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface DeliveryIconProps extends SvgProps {
  width?: number;
  height?: number;
}

const DeliveryIcon = ({
  width = 20,
  height = 23,
  ...props
}: DeliveryIconProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke="#181725"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.686 9.463C1.702 4.78 5.478.998 10.12 1.014c4.642.016 8.393 3.824 8.377 8.506v.096c-.057 3.043-1.742 5.857-3.808 8.055a22.135 22.135 0 0 1-3.931 3.264c-.383.334-.95.334-1.333 0a21.769 21.769 0 0 1-5.53-5.222A10.907 10.907 0 0 1 1.686 9.49v-.028Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#181725"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.092 11.987a2.352 2.352 0 0 0 2.341-2.361 2.352 2.352 0 0 0-2.341-2.362A2.352 2.352 0 0 0 7.75 9.626a2.352 2.352 0 0 0 2.342 2.361Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DeliveryIcon;
