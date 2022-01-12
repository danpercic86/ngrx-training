export interface DisplayItem {
  readonly id: number;
  readonly title: string;
  readonly description?: string;
  readonly selected: boolean;
}
