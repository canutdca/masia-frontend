import { useState } from 'react'
import { User } from '../domain/user.model'
import { saveUserApi } from '../shared/users-api.service'

export function useUserDetail() {

	const saveUser = async (name: string, email: string): Promise<void> => {
		const user = new User(name, email)
		try {
			await saveUserApi(user)
		} catch (error: any) {
			alert(error.message)
		}
	}

	return {
		saveUser
	}
}
