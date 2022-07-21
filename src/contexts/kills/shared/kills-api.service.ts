import { httpDelete, httpGet, httpPutOrPost } from '_core/services/http.service'
import { Kill } from '../domain/kill.model'

const endpoint = '/kills'

export async function getKillsApi(): Promise<Kill[]> {
	return (await httpGet<Kill[]>(endpoint))
}

export async function saveKillApi(kill: Kill): Promise<void> {
	await httpPutOrPost<Kill>(endpoint, 'POST', kill)
}

export async function deleteKillApi(id: string): Promise<void> {
	await httpDelete(endpoint, id)
}
