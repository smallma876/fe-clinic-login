export interface ObjectDispatch<T, P = any> {
  type: T;
  payload?: P;
}
