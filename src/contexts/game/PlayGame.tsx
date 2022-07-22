import styled from '@emotion/styled'
import { useGame } from './game.hook'

export function PlayGame() {

	const { initGame, message } = useGame()

	const play = () => {
		var pass = prompt(
`Estás seguro que vas a iniciar el juego?
Recuerda que se va a enviar un email a todxs los jugadorxs.
Si es así, ingresa la contraseña`);

		if (pass === 'daledondale') {
			initGame()
		}
	}
	return (
		<section>
			<Button onClick={play}>PLAY</Button>
			{message}
		</section>

	)
}

const Button = styled.button`
	margin: 8px;
`
