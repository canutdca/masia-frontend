import { httpPutOrPost } from '_core/services/http.service'

const endpoint = '/game'

export async function initGameApi(): Promise<void> {
	await httpPutOrPost(endpoint, 'POST')
}
