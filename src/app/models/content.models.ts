export interface NavLink {
  label: string;
  path: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  summary: string;
  points: string[];
}

export interface IndustryItem {
  icon: string;
  name: string;
}

export interface StatItem {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  isGoal: boolean;
}
