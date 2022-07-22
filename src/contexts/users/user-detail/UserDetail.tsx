import styled from '@emotion/styled'
import { useState } from 'react'
import { useNavigation } from '_core/hooks/useNavigation'
import { InputText } from '_shared/components/InputText'
import { USERS_PAGE_ROUTE } from '../../../routes'
import { useUserDetail } from './user-detail.hook'

export function UserDetail() {

	const { goTo } = useNavigation()
	const { saveUser } = useUserDetail()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')

	const save = async (name: string, email: string) => {
		try {
			await saveUser(name, email)
			goTo(USERS_PAGE_ROUTE)
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
				<br/>
				<InputText
					placeholder='Email'
					value={email}
					onChange={(value) => setEmail(value)}
					style={'simple'}
				/>
			</Article>
			<Button onClick={() => save(name, email)}>Save</Button>
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
