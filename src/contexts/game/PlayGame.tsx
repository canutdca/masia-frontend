import styled from '@emotion/styled'
import { useUsersList } from './game-list.hook'

export function PlayGame() {

	const { initGame, message } = useUsersList()

	return (
		<section>
			<Button onClick={initGame}>PLAY</Button>
			{message}
		</section>

	)
}

const Button = styled.button`
	margin: 8px;
`
