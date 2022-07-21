import { Cloneable } from 'contexts/_shared/domain/Cloneable.model'
import { Saveable } from 'contexts/_shared/domain/Saveable.model'
import { v4 as uuidv4 } from 'uuid'

export class Kill implements Saveable, Cloneable<Kill> {
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

	constructor(name: string = '') {
		this.#id = uuidv4()
		this.#name = name
	}

	toPrimitives(): any {
		return {
			id: this.#id,
			name: this.#name,
		}
	}

	static fromPrimitives(plainData: {
		id: string
		name: string
	}): Kill {
		return new Kill(plainData.name)
	}

	clone(): Kill {
		return new Kill(this.#name)
	}
}
