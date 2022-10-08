import ValueObject from "../value-object";

class StubValueObject extends ValueObject { }

describe('ValueObject Unit Tests', () => {

  it('should set value object', () => {
    let vo = new StubValueObject('any')
    expect(vo.value).toBe('any')
    console.log(`${vo}`);

    vo = new StubValueObject({ prop1: 'any' })
    expect(vo.value).toStrictEqual({ prop1: 'any' })
    console.log(`${vo}`);
  })
})
