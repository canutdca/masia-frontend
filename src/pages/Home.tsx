import { PlayGame } from 'contexts/game/PlayGame'
import { GroupsList } from 'contexts/users/users-lists/UsersList'

export default function Home() {
	return (
		<>
			<GroupsList />
			<PlayGame />
		</>
	)
}
