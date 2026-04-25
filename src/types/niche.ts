export interface NicheMeta {
  slug: string;
  title: string;
  description: string;
  ogImage: string;
  schemaType: "Service" | "MedicalOrganization" | "LocalBusiness";
  industryIds: string[];
}

export interface NicheCtaLink {
  text: string;
  url: string;
}

export interface NicheHero {
  eyebrow: string;
  h1: string;
  subtitle: string;
  facts: string[];
  ctaPrimary: NicheCtaLink;
  ctaSecondary: NicheCtaLink;
}

export interface NichePainPointItem {
  number: string;
  title: string;
  text: string;
}

export interface NichePainPoints {
  h2: string;
  items: NichePainPointItem[];
  scrollLabel: string;
}

export interface NicheFeatureGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface NicheFeatures {
  h2: string;
  subtitle: string;
  groups: NicheFeatureGroup[];
}

export interface NicheCases {
  h2: string;
  subtitle: string;
  caseIds: string[];
  ctaText: string;
  ctaUrl: string;
}

export interface NicheIntegrationLogo {
  name: string;
  logo: string;
}

export interface NicheIntegrations {
  h2: string;
  description: string;
  logos: NicheIntegrationLogo[];
}

export interface NicheComparison {
  h2: string;
  columns: string[];
  rows: string[][];
  highlightColumnIndex: number;
  ctaPrimary: NicheCtaLink;
  ctaSecondary: NicheCtaLink;
}

export interface NichePricingTier {
  name: string;
  priceFrom: number;
  displayPrice: string;
  duration: string;
  highlighted?: boolean;
  includesPrevious?: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  ctaUrl?: string;
}

export interface NichePricing {
  h2: string;
  tiers: NichePricingTier[];
}

export interface NicheFaqItem {
  question: string;
  answer: string;
}

export interface NicheFaq {
  h2: string;
  items: NicheFaqItem[];
}

export interface NicheLeadMagnetField {
  label: string;
  placeholder: string;
}

export interface NicheLeadMagnet {
  h2: string;
  subtitle: string;
  benefits: string[];
  promise: string;
  formFields: {
    name: NicheLeadMagnetField;
    email: NicheLeadMagnetField;
    phone?: NicheLeadMagnetField;
    websiteUrl: NicheLeadMagnetField;
  };
  ctaText: string;
  smallText: string;
}

export interface NicheLandingData {
  meta: NicheMeta;
  hero: NicheHero;
  painPoints: NichePainPoints;
  features: NicheFeatures;
  cases: NicheCases;
  integrations: NicheIntegrations;
  comparison: NicheComparison;
  pricing: NichePricing;
  faq: NicheFaq;
  leadMagnet: NicheLeadMagnet;
}
