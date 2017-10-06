import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las iteraciones while-do.
*/
export class WhileDoElse implements Stmt {
  cond: Exp;
  body: Stmt;
  elseBody: Stmt;

  constructor(cond: Exp, body: Stmt, elseBody: Stmt) {
    this.cond = cond;
    this.body = body;
    this.elseBody = elseBody;
  }

  toString(): string {
    return `WhileDoElse(${this.cond.toString()}, ${this.body.toString()})`;
  }

  unparse(): string {
    return `while ${this.cond.unparse()} do { ${this.body.unparse()} else}`;
  }

  evaluate(state: State): State {
    if(this.cond.evaluate(state)){
      while(this.cond.evaluate(state)){
        state = this.body.evaluate(state);
      }
    }else{
      state = this.elseBody.evaluate(state);
    }
    return state;
  }
}
