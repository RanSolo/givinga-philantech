export interface Address {
  city: string;
  state: string;
}

export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  name: string;
  tagline: string;
}

export interface Campaign {
  name: string;
  tagline: string;
  category: string;
}

export interface Charity {
  address: Address;
  branding: Branding;
  campaigns: Campaign[];
}
