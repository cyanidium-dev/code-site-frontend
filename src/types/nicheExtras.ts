export type MockupKind =
  | "old"
  | "modern"
  | "services"
  | "booking"
  | "admin"
  | "chat";

export interface BeforeAfterColumn {
  label: string;
  mockup?: MockupKind;
  imagePath?: string;
  imageAlt: string;
  items: string[];
  itemsHtml?: string[];
  note?: string;
  versionLabel?: string;
  tagline?: string;
  domain?: string;
  taglineState?: "bad" | "good";
}

export interface BeforeAfterArchitecture {
  h3: string;
  intro: string;
  stepsLabel: string;
  steps: string[];
  outcomesLabel: string;
  outcomes: string[];
}

export interface BeforeAfterData {
  eyebrow?: string;
  eyebrowLabel?: string;
  eyebrowEmphasis?: string;
  h2: string;
  h2Html?: string;
  caption?: string;
  subtitle: string;
  subtitleHtml?: string;
  metaItems?: Array<{
    value: string;
    label: string;
  }>;
  before: BeforeAfterColumn;
  after: BeforeAfterColumn;
  conclusion: string;
  results?: Array<{
    tag: string;
    value: string;
    label: string;
  }>;
  ctaText?: string;
  ctaLink?: {
    text: string;
    url: string;
  };
  architecture?: BeforeAfterArchitecture;
}

export interface BenefitsBlock {
  title: string;
  titleHtml?: string;
  items: string[];
  itemsHtml?: string[];
  mockup?: MockupKind;
  imagePath?: string;
  imageAlt: string;
  imageOnRight?: boolean;
  featureLabel?: string;
  visualUrl?: string;
}

export interface BenefitsHighlight {
  metric: string;
  metricLabel?: string;
  metricNote?: string;
  extras: string[];
  extrasHtml?: string[];
}

export interface BenefitsData {
  h2: string;
  h2Html?: string;
  subtitle: string;
  subtitleHtml?: string;
  recapLabel?: string;
  recapText?: string;
  recapTextHtml?: string;
  architectureLabel?: string;
  architectureH3?: string;
  architectureH3Html?: string;
  architectureIntro?: string;
  architectureIntroHtml?: string;
  architectureLeftTitle?: string;
  architectureLeftItems?: string[];
  architectureLeftItemsHtml?: string[];
  architectureRightTitle?: string;
  architectureRightItems?: string[];
  architectureRightItemsHtml?: string[];
  highlight?: BenefitsHighlight;
  blocks: BenefitsBlock[];
}

export interface TestimonialData {
  eyebrow?: string;
  quote: string;
  authorName: string;
  authorRole: string;
  mockup?: MockupKind;
  imagePath?: string;
  imageAlt: string;
}

export interface ProjectFormFieldDef {
  label: string;
  placeholder: string;
}

export interface NicheProjectFormData {
  h2: string;
  subtitle: string;
  formFields: {
    name: ProjectFormFieldDef;
    contact: ProjectFormFieldDef;
    message: ProjectFormFieldDef;
  };
  ctaText: string;
  altContactPrefix: string;
  altContactLabel: string;
  altContactUrl: string;
}

export interface NicheExtras {
  beforeAfter?: BeforeAfterData;
  benefits?: BenefitsData;
  testimonial?: TestimonialData;
  projectForm?: NicheProjectFormData;
}
