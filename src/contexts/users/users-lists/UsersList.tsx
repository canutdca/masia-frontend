import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useCookies } from '_core/hooks/useCookies'
import { useNavigation } from '_core/hooks/useNavigation'
import { Card } from '_shared/components/Card'
import { ADDUSER_PAGE_ROUTE } from '../../../routes'
import { User } from '../domain/user.model'
import { useUsersList } from './users-list.hook'

const COOKIE = 'showUsersList'

export function GroupsList() {
	
	const { goTo } = useNavigation()
	const { addCookie, getCookie } = useCookies()
	const { getUsers, deleteUser } = useUsersList()
	
	const fetchData = async () => {
		setUsers(await getUsers())
	}
	
	const [users, setUsers] = useState<User[]>([])
	const [show, setShow] = useState(false)

	useEffect(() => {
		if (getCookie(COOKIE) !== 'true') 
		{
			const pass = prompt('Inserta la contraseña de acceso a esta sección.')
			if (pass === 'batmasia') addCookie(COOKIE, 'true')
			else return
		}
		fetchData()
		setShow(true)
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

	return show ? (
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
	) : <></>
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
