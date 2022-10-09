import { UniqueEntityId } from '../unique-entity-id.vo';
import { InvalidUuidError } from '../../../errors/invalid-uuid.error';
import { validate } from 'uuid';

describe('UniqueEntityId Unit Tests', () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')

  beforeEach(() => {
    validateSpy.mockClear()
  })

  it('should throw error when uuid is invalid', () => {
    expect(() => {
      new UniqueEntityId('any')
    }).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should accept uuid passed in constructor', () => {
    const uuid = '44bda9e6-3139-11ed-a261-0242ac120002'
    const vo = new UniqueEntityId(uuid)
    expect(vo.value).toBe(uuid)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should accept uuid passed in constructor', () => {
    const vo = new UniqueEntityId()
    expect(validate(vo.value)).toBe(true)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})
