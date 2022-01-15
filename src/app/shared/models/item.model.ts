import { List } from '../utils/types';

export interface Item {
  readonly id: number;
  readonly title: string;
  readonly description?: string;
}

export type Items = List<Item>;

export interface DisplayedItem extends Item {
  checked: boolean;
}
