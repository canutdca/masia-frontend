import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useCookies } from '_core/hooks/useCookies'
import { useNavigation } from '_core/hooks/useNavigation'
import { Card } from '_shared/components/Card'
import { ADDKILL_PAGE_ROUTE } from '../../../routes'
import { Kill } from '../domain/kill.model'
import { useKillsList } from './kills-list.hook'

const COOKIE = 'showKillsList'

export function KillsList() {
	const [kills, setKills] = useState<Kill[]>([])
	const [show, setShow] = useState(false)

	const { goTo } = useNavigation()
	const { addCookie, getCookie } = useCookies()
	const { getKills, deleteKill } = useKillsList()

	const fetchData = async () => {
		setKills(await getKills())
	}

	useEffect(() => {
		if (getCookie(COOKIE) !== 'true') 
		{
			const pass = prompt('Inserta la contraseña de acceso a esta sección.')
			if (pass === 'muerteporkiki69') addCookie(COOKIE, 'true')
			else return
		}
		fetchData()
		setShow(true)
	}, [])

	const onDelete = async (killId: string) => {
		if (confirm('Estás seguro que deseas borrar esto?')){
			try {
				await deleteKill(killId)
				fetchData()
			} catch (error) {
				alert('Error: ' + error)
			}
		}
	}
	
	const goToNewKill = () => {
		goTo(ADDKILL_PAGE_ROUTE)
	}

	return show ? (
		<Section>
			{kills.map((kill: Kill) =>
				<Article key={kill.id} onClick={() => onDelete(kill.id)}>
					<Card>
						{kill.name}
					</Card>
				</Article>
			)}

			<Article onClick={() => goToNewKill()}>
				<Card color={'secundary'}>
					New Kill
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
