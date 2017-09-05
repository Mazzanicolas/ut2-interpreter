import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las iteraciones while-do.
*/
export class DoWhile implements Stmt {
  cond: Exp;
  body: Stmt;

  constructor(cond: Exp, body: Stmt) {
    this.cond = cond;
    this.body = body;
  }

  toString(): string {
    return `DoWhile(${this.cond.toString()}, ${this.body.toString()})`;
  }

  unparse(): string {
    return `DoWhile ${this.cond.unparse()} do { ${this.body.unparse()} }`;
  }

  evaluate(state: State): State {
    do {
      state = this.body.evaluate(state);
    } while (this.cond.evaluate(state));
    return state;
  }
}
