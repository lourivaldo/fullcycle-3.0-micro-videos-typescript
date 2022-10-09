import { Entity } from '../../../@seedwork/domain/entity/entity';
import { UniqueEntityId } from '../../../@seedwork/domain/value-objects/unique-entity-id.vo';

type CategoryProperties = {
  name: string
  description?: string
  isActive?: boolean
  createdAt?: Date
}

export class Category extends Entity<CategoryProperties> {
  constructor(
    public readonly props: CategoryProperties,
    id?: UniqueEntityId
  ) {
    super(props, id)
    this.description = this.props.description
    this.isActive = this.props.isActive
    this.props.createdAt = this.props.createdAt || new Date()
  }

  get name() {
    return this.props.name
  }

  get description() {
    return this.props.description
  }

  get isActive() {
    return this.props.isActive
  }

  get createdAt() {
    return this.props.createdAt
  }

  private set description(value: string) {
    this.props.description = value ?? null
  }

  private set isActive(value: boolean) {
    this.props.isActive = value ?? true
  }
}
