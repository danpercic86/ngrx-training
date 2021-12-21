import {List} from "./types";

export interface Item {
  readonly id: number;
  readonly title: string;
  readonly description: string;
}

export type Items = List<Item>
