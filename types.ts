
export interface Website {
  id: string;
  title: string;
  slug: string;
  category: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  images: string[];
  demoUrl: string;
  isFeatured?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}
