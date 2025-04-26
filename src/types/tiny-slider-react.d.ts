declare module 'tiny-slider-react' {
  import { FC, ReactNode } from 'react';

  interface TinySliderProps {
    settings?: {
      items?: number;
      controls?: boolean;
      mouseDrag?: boolean;
      loop?: boolean;
      rewind?: boolean;
      autoplay?: boolean;
      autoplayButtonOutput?: boolean;
      autoplayTimeout?: number;
      nav?: boolean;
      responsive?: {
        [key: number]: {
          items: number;
        };
      };
      [key: string]: any;
    };
    children: ReactNode;
  }

  const TinySlider: FC<TinySliderProps>;
  export default TinySlider;
} 