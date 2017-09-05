import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de constantes numéricas o numerales.
*/
export class Length implements Exp {

  value: Exp;

  constructor(value:Exp) {
    this.value = value;
  }

  toString(): string {
    return `Length(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    console.log(typeof (this.value.evaluate(state).lenght));
    return this.value.evaluate(state).length;
  }
}
