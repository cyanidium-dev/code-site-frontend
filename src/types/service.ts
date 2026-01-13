export interface Service {
  title: string;
  subtitle: string;
  priceText: string;
  price: string;
  description: string;
  pros: string[];
  seeMore: string;
  wantIt: string;
  seeMoreLink: string;
  wantItLink: string;
  comparisonFeatures: {
    [key: string]: {
      value: boolean | string;
      text?: string;
    };
  };
}

export interface ExtraInfo {
  title: string;
  description: string;
  infoList: {
    title: string;
    items: string[];
  };
}

export interface ComparisonTable {
  title: string;
  description: string;
  table: string[];
  buttonText: string;
}
