import { getUsersApi } from '../shared/users-api.service'

export function useUsersList() {

	const getUsers = async () =>
		await getUsersApi()

	return {
		getUsers
	}
}
