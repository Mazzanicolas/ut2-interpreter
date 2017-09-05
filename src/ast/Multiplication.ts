import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de multiplicaciones.
*/
export class Multiplication implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Multiplication(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} * ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    var result:number=0;
    if (typeof this.lhs.evaluate(state)!='number'){
      result= this.lhs.evaluate(state).repeat(this.rhs.evaluate(state));
    } else if(typeof this.rhs.evaluate(state)!='number'){
      result= this.rhs.evaluate(state).repeat(this.lhs.evaluate(state));
    }else{
      result = this.lhs.evaluate(state) * this.rhs.evaluate(state);
    }
    return result;
  }
}
