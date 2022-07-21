import styled from '@emotion/styled'
import { useState } from 'react'
import { InputText } from '_shared/components/InputText'
import { useUserDetail } from './user-detail.hook'

export function UserDetail() {

	const { saveUser } = useUserDetail()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')


	return (
		<Section>
			<Article>
				<InputText
					placeholder='Name'
					value={name}
					onChange={(value) => setName(value)}
					style={'simple'}
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
			<Button onClick={() => saveUser(name, email)}>Save</Button>
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
