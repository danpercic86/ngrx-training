import {
  EMPTY,
  filter,
  from,
  iif,
  ObservableInput,
  of,
  pipe,
  switchMap,
  switchMapTo,
} from 'rxjs';

type MaybeFalsy<T> = null | undefined | T;

export function isNotNullOrUndefined<T>(value: MaybeFalsy<T>): value is T {
  return value !== null && value !== undefined;
}

export function isNullOrUndefined<T>(value: MaybeFalsy<T>) {
  return !isNotNullOrUndefined(value);
}

export function ifFalsyThen<T>(action: () => ObservableInput<unknown>) {
  return pipe(
    switchMap((value: MaybeFalsy<T>) => iif(
      () => isNullOrUndefined(value),
      from(action()).pipe(switchMapTo(EMPTY)),
      of(value),
    )),
    filter(isNotNullOrUndefined),
  );
}
