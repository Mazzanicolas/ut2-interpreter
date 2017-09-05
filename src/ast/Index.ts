import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de constantes numéricas o numerales.
*/
export class Index implements Exp {

  value: Exp;
  index: Exp;

  constructor(value:Exp,index:Exp) {
    this.value = value;
    this.index = index;
  }

  toString(): string {
    return `Index(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return this.value.evaluate(state)[this.index.evaluate(state)];
  }
}
