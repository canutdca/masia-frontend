import styled from '@emotion/styled'
import { useGame } from './game.hook'

export function PlayGame() {

	const { initGame, message } = useGame()

	const play = () => {
		var pass = prompt(
`Estás seguro que vas a iniciar el juego?
Recuerda que se va a enviar un email a todxs los jugadorxs.
Si es así, ingresa la contraseña`);

		if (pass === 'daledondale666') initGame()
	}

	return (
		<section>
			<ButtonContainer>
				<Button onClick={play}>PLAY</Button>
				<div>{message}</div>
			</ButtonContainer>
		</section>

	)
}

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
`

const Button = styled.button`
	width: max-content;
	margin: 1rem;
	font-size: 2rem;
	display: block;
`
