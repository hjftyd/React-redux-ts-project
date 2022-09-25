export type Pizza = {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type FetchPizzasArgs = {
  sortBy?: string;
  order?: string;
  categoryId?: number;
  searchValue?: string;
  currentPage?: number;
  limit?: number;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
  countItems: number;
}

export type FetchPizzasAnswer = {
  count: number;
  pizzas: Pizza[];
};
