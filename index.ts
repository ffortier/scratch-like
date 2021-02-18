import "./style.css";
import { ValueExpression } from "./expression";

const a = new ValueExpression("test");

alert(a.evaluate());
