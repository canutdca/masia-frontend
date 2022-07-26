import { Saveable } from 'contexts/_shared/domain/Saveable.model'

const basePath = import.meta.env.VITE_API_URL

export const httpGet = async <T>(path: string): Promise<T> => {
	try {
		const response = await fetch(basePath + path)
		if (!response.ok) throw new HttpError(response.statusText)
		return (await response.json() as T)
	} catch (err) {
		alert(err)
		throw new HttpError('ERR_CONNECTION_REFUSED')
	}
}

export const httpPutOrPost = async <T>(path: string, method: 'POST' | 'PUT', objectToSave?: Saveable): Promise<void> => {
	try {
		const response = await fetch(basePath + path, {
			method,
			body: new URLSearchParams(objectToSave?.toPrimitives()),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		})
		if (!response.ok) throw new HttpError(response.statusText)
	} catch (err) {
		console.log(err)
		throw new HttpError('ERR_CONNECTION_REFUSED')
	}
}

export const httpDelete = async (path: string, id: string): Promise<void> => {
	try {
		const response = await fetch(`${basePath}${path}/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		})
		if (!response.ok) throw new HttpError(response.statusText)
	} catch (err) {
		console.log(err)
		throw new HttpError('ERR_CONNECTION_REFUSED')
	}
}

export class HttpError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'HTTP_ERROR'
	}
}
