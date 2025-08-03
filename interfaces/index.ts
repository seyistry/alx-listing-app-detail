export interface PropertyProps {
  name: string;
  rating: number;
  location: string;
  image: string;
  description: string;
  category: string[];
  address: { city: string; country: string };
}
