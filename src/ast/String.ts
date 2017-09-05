import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de constantes numéricas o numerales.
*/
export class String implements Exp {

  value: string;

  constructor(value: string) {
    this.value = value;
  }

  toString(): string {
    return `String(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return this.value;
  }
}
