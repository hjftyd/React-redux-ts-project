export enum SortPropertyEnum {
  RATING = 'Популярности',
  ALPHABET = 'от А до Я',
  REVERSE_ALPHABET = 'от Я до А',
  EXPENSIVE = 'По убыванию цены',
  CHEAP = 'По возрастанию цены',
}

export enum sortBy {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export enum sortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export type SortItem = {
  name: SortPropertyEnum;
  sortBy: sortBy;
  order: sortOrder;
};

export interface FilterSliceState {
  searchValue?: string;
  categoryId: number;
  currentPage: number;
  sort: SortItem;
}
