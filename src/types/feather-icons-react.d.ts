declare module 'feather-icons-react' {
  import { FC, SVGProps } from 'react';

  interface FeatherIconProps extends SVGProps<SVGElement> {
    icon: string;
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    className?: string;
  }

  const FeatherIcon: FC<FeatherIconProps>;
  export default FeatherIcon;
} 