declare module 'choices.js' {
  interface ChoicesOptions {
    searchEnabled?: boolean;
    searchPlaceholderValue?: string;
    [key: string]: any;
  }

  class Choices {
    constructor(element: HTMLElement | HTMLSelectElement, options?: ChoicesOptions);
    destroy(): void;
    [key: string]: any;
  }

  export default Choices;
} 