import { PlayGame } from 'contexts/game/PlayGame'
import { Instructions } from 'contexts/instructions/Instructions'

export default function HomePage() {
	return (
		<>
			<Instructions />
			<PlayGame />
		</>
	)
}
