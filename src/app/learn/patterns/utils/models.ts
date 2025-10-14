export interface IListing {
  id: number;
  title: string;
  image: string;
  name: string;
  city: string;
  state: string;
  price: number;
  floors: number;
  rooms: number;
  sqft: number;
}

export interface WithLoaderProps<T> {
  data: T;
}
