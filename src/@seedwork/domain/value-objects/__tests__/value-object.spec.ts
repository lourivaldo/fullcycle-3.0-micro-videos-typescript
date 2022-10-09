import ValueObject from "../value-object";

class StubValueObject extends ValueObject { }

describe('ValueObject Unit Tests', () => {

  it('should set value object', () => {
    let vo = new StubValueObject('any')
    expect(vo.value).toBe('any')

    vo = new StubValueObject({ prop1: 'any' })
    expect(vo.value).toStrictEqual({ prop1: 'any' })
  })

  it('should convert to string', () => {
    // let vo = new StubValueObject(null)
    // expect(vo + "").toBe('null')

    // vo = new StubValueObject(undefined)
    // expect(vo + "").toBe('undefined')

    let vo = new StubValueObject('')
    expect(vo + "").toBe('')

    vo = new StubValueObject('fake test')
    expect(vo + "").toBe('fake test')

    vo = new StubValueObject(0)
    expect(vo + "").toBe('0')

    vo = new StubValueObject(1)
    expect(vo + "").toBe('1')

    vo = new StubValueObject(5)
    expect(vo + "").toBe('5')

    vo = new StubValueObject(10.1)
    expect(vo + "").toBe('10.1')

    vo = new StubValueObject(true)
    expect(vo + "").toBe('true')

    vo = new StubValueObject(false)
    expect(vo + "").toBe('false')

    const date = new Date()
    vo = new StubValueObject(date)
    expect(vo + "").toBe(date.toString())

    vo = new StubValueObject({ prop1: 'any' })
    expect(vo + "").toBe('{"prop1":"any"}')
  });

  it('should be immutable object', () => {
    const obj = {
      prop1: 'value1',
      deep: { prop2: 'value2', prop3: new Date() }
    }
    let vo = new StubValueObject(obj)

    expect(() => {
      (vo as any).value.prop1 = 'any'
    }).toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'")

    expect(() => {
      (vo as any).value.deep.prop2 = 'any'
    }).toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'")

    expect(vo.value.deep.prop3).toBeInstanceOf(Date)
  });
})
