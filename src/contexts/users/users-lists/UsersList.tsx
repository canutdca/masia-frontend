import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useNavigation } from '_core/hooks/useNavigation'
import { Card } from '_shared/components/Card'
import { ADDUSER_PAGE_ROUTE } from '../../../routes'
import { User } from '../domain/user.model'
import { useUsersList } from './users-list.hook'

export function GroupsList() {
	const [users, setUsers] = useState<User[]>([])
	const { goTo } = useNavigation()

	const { getUsers, deleteUser } = useUsersList()

	const fetchData = async () => {
		setUsers(await getUsers())
	}

	useEffect(() => {
		fetchData()
	}, [])

	const onDelete = async (userId: string) => {
		if (confirm('Estás seguro que deseas borrar esto?')){
			try {
				await deleteUser(userId)
				fetchData()
			} catch (error) {
				alert('Error: ' + error)
			}
		}
	}

	const goToNewUser = () => {
		goTo(ADDUSER_PAGE_ROUTE)
	}

	return (
		<Section>
			{users.map((user: User) =>
				<Article key={user.id} onClick={() => onDelete(user.id)}>
					<Card>
						{user.name}
					</Card>
				</Article>
			)}

			<Article onClick={() => goToNewUser()}>
				<Card color={'secundary'}>
					New User
				</Card>
			</Article>
		</Section>

	)
}

const Section = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-center;
`

const Article = styled.article`
	margin: 8px;
`
