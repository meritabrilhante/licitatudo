import Image from 'next/image';
import { CSSProperties } from 'react';

import { IconSVG, iconSVGs } from "./svgs";

export interface CustomIconProps {
  type: IconSVG;
  size?: number
  style?: CSSProperties;
  alt?: string;
}

const CustomIcon = ({ type, size = 40, style, alt = '' }: CustomIconProps) => {
  return (
    <div style={{ width: size, height: size, ...style }}>
      <Image
        width={size}
        height={size}
        src={iconSVGs[type]}
        objectFit="fill"
        alt={alt}
      />
    </div>
  );
}

export default CustomIcon;