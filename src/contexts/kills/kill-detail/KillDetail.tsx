import styled from '@emotion/styled'
import { useState } from 'react'
import { useNavigation } from '_core/hooks/useNavigation'
import { InputText } from '_shared/components/InputText'
import { KILLS_PAGE_ROUTE } from '../../../routes'
import { useKillDetail } from './kill-detail.hook'

export function KillDetail() {

	const { goTo } = useNavigation()
	const { saveKill } = useKillDetail()

	const [name, setName] = useState('')
	const [error, setError] = useState('')

	const save = async (name: string) => {
		try {
			await saveKill(name)
			goTo(KILLS_PAGE_ROUTE)
		} catch (error) {
			setError('Error: ' + error)
		}
	}
	return (
		<Section>
			<Article>
				<InputText
					placeholder='Name'
					value={name}
					onChange={(value) => setName(value)}
					style={'simple'}
					autoFocus={true}
				/>
				<br/>
			</Article>
			<Button onClick={() => save(name)}>Save</Button>
			<Error>{error}</Error>
		</Section>

	)
}

const Section = styled.section`
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-center;
	align-items: center;
`

const Article = styled.article`
	margin: 8px;
`
const Button = styled.button`
	margin: 1rem;
`

const Error = styled.div`
	color: red;
`
