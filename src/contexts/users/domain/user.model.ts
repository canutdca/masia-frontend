import { Cloneable } from 'contexts/_shared/domain/Cloneable.model'
import { Saveable } from 'contexts/_shared/domain/Saveable.model'
import { v4 as uuidv4 } from 'uuid'

export class User implements Saveable, Cloneable<User> {
	#id: string
	get id(): string {
		return this.#id
	}

	#name: string
	get name(): string {
		return this.#name
	}
	set name(value: string) {
		this.#name = value
	}

	#email: string
	get email(): string {
		return this.#email
	}
	set email(value: string) {
		this.#email = value
	}

	constructor(name: string = '', email: string) {
		this.#id = uuidv4()
		this.#name = name
		this.#email = email
	}

	toPrimitives(): any {
		return {
			id: this.#id,
			name: this.#name,
			email: this.#email
		}
	}

	static fromPrimitives(plainData: {
		id: string
		name: string
		email: string
	}): User {
		return new User(plainData.name, plainData.email)
	}

	clone(): User {
		return new User(this.#name, this.#email)
	}
}
