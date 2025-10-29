// Define the shape of object - Public API since the consumer can extend them
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

export type WithLoaderProps<T> = {
  data: T;
};

export type Temperature = {
  value: number;
};
