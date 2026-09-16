
export interface UserState {
  name: string;
  email: string;
  plan: string;
  isLoggedIn: boolean;
}

export interface Organization {
  id: string;
  name: string;
  logo: string;
  websiteUrl: string;
  industry: string;
  healthScore: number;
}
