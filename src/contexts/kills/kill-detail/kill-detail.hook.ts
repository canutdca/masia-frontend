import { Kill } from '../domain/kill.model'
import { saveKillApi } from '../shared/kills-api.service'

export function useKillDetail() {

	const saveKill = async (name: string): Promise<void> => {
		const kill = new Kill(name)
		await saveKillApi(kill)
	}

	return {
		saveKill
	}
}
