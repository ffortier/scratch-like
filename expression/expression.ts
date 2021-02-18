import { ExpressionVisitor } from "../visitor";

export interface Expression<T> {
  evaluate(): T;
  accept(visitor: ExpressionVisitor): void;
}
