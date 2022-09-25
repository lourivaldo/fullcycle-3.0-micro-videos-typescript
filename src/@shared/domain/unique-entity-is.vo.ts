import { InvalidUuidError } from '../errors/invalid-uuid.error';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export class UniqueEntityId {
  constructor(public readonly id?: string) { 
    this.id = this.id || uuidv4();
    this.validate();
  }

  private validate() {
    const isValid = uuidValidate(this.id)
    if (!isValid) {
      throw new InvalidUuidError();
    }
    return isValid;
  }
}