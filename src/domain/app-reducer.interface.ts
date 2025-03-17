// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ObjectDispatch<T, P = any> {
  type: T;
  payload?: P;
}
