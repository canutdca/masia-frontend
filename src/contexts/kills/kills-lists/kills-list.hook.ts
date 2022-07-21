import { deleteKillApi, getKillsApi } from '../shared/kills-api.service'

export function useKillsList() {

	const getKills = async () => await getKillsApi()
	const deleteKill = async (id: string) => await deleteKillApi(id)

	return {
		getKills,
		deleteKill
	}
}
