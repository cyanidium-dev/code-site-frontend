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
  note?: string;
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
  h2: string;
  caption?: string;
  subtitle: string;
  before: BeforeAfterColumn;
  after: BeforeAfterColumn;
  conclusion: string;
  architecture?: BeforeAfterArchitecture;
}

export interface BenefitsBlock {
  title: string;
  items: string[];
  mockup?: MockupKind;
  imagePath?: string;
  imageAlt: string;
  imageOnRight?: boolean;
}

export interface BenefitsHighlight {
  metric: string;
  metricLabel?: string;
  metricNote?: string;
  extras: string[];
}

export interface BenefitsData {
  h2: string;
  subtitle: string;
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
