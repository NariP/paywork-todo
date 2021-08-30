export interface I_Theme {
  colors: {
    primary: string;
    secondary: string;
    bgColor: string;
    secondaryBg: string;
    textColor: string;
    secondaryText: string;
    normalAlpha: string;
  };
}

export const light = {
  colors: {
    primary: '#008ECC',
    secondary: '#73C2FB',
    bgColor: 'white',
    secondaryBg: '#fcfcfc',
    textColor: '#333',
    secondaryText: '#999',
    normalAlpha: 'rgba(153, 153, 153, 0.3)',
  },
};
export const dark = {
  colors: {
    primary: '#73C2FB',
    secondary: '#008ECC',
    bgColor: '#333',
    secondaryBg: '#4C516D',
    textColor: 'white',
    secondaryText: '#999',
    normalAlpha: 'rgba(153, 153, 153, 0.3)',
  },
};
