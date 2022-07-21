import styled from '@emotion/styled'
import { useGame } from './game.hook'

export function PlayGame() {

	const { initGame, message } = useGame()

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
