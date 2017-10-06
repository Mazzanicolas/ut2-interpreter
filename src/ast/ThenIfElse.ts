import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las sentencias condicionales.
*/
export class ThenIfElse implements Exp {
  cond: Exp;
  thenExp: Exp;
  elseExp: Exp;

  constructor(cond: Exp, thenExp: Exp, elseExp: Exp) {
    this.cond = cond;
    this.thenExp = thenExp;
    this.elseExp= elseExp;
  }

  toString(): string {
    return `ThenIfElse(${this.cond.toString()}, ${this.thenExp.toString()}, ${this.elseExp.toString()})`;
  }

  unparse(): string {
    return ` { ${this.thenExp.unparse()} if ${this.cond.unparse()} then} else { ${this.elseExp.unparse()} }`;
  }

  evaluate(state: State): Exp {
    if(this.cond.evaluate(state)){
      return this.thenExp.evaluate(state);
    }else{
      return this.elseExp.evaluate(state);
    }
  }
}
