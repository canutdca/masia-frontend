import { deleteUserApi, getUsersApi } from '../shared/users-api.service'

export function useUsersList() {

	const getUsers = async () => await getUsersApi()
	const deleteUser = async (id: string) => await deleteUserApi(id)

	return {
		getUsers,
		deleteUser
	}
}
