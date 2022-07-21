import { httpDelete, httpGet, httpPutOrPost } from '_core/services/http.service'
import { User } from '../domain/user.model'

const endpoint = '/users'

export async function getUsersApi(): Promise<User[]> {
	return (await httpGet<User[]>(endpoint))
}

export async function saveUserApi(user: User): Promise<void> {
	await httpPutOrPost<User>(endpoint, 'POST', user)
}

export async function deleteUserApi(id: string): Promise<void> {
	await httpDelete(endpoint, id)
}
