import { Expression } from "./expression";
import { ExpressionVisitor } from "../visitor";

export class ValueExpression implements Expression<number | string> {
  constructor(readonly value: number | string) {}

  evaluate(): number | string {
    return this.value;
  }

  accept(visitor: ExpressionVisitor): void {
    visitor.visitValueExpression(this);
  }
}
