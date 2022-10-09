import { UniqueEntityId } from "../value-objects/unique-entity-id.vo";
import { Entity } from "./entity";
import { validate } from "uuid";

class StubEntity extends Entity<{ prop1: string, prop2: number }> { }

describe('Entity Unit Tests', () => {
  it('should set props and id', () => {
    const props = { prop1: 'any_1', prop2: 10 }

    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).not.toBeNull()
    expect(validate(entity.id)).toBeTruthy()
  });

  it('should set accept a valid uuid', () => {
    const props = { prop1: 'any_1', prop2: 10 }
    const uniqueEntityId = new UniqueEntityId()
    const entity = new StubEntity(props, uniqueEntityId)

    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    expect(entity.id).toBe(uniqueEntityId.value)
  });

  it('should convert a entity to a JSON', () => {
    const props = { prop1: 'any_1', prop2: 10 }
    const uniqueEntityId = new UniqueEntityId()
    const entity = new StubEntity(props, uniqueEntityId)

    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...props
    })

  });
});