import { ValueExpression } from "../expression";

export interface ExpressionVisitor {
  visitValueExpression(expr: ValueExpression): void;
}
