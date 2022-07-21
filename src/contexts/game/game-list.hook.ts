import { useState } from 'react'
import { initGameApi } from './game-api.service'

export function useUsersList() {

	const [message, setMessage] = useState('')

	const initGame = async () => {
		try {
			await initGameApi()
			setMessage('OK')
		} catch (error) {
			setMessage('ERROR: ' + error)
		}
	}

	return {
		initGame,
		message
	}
}
