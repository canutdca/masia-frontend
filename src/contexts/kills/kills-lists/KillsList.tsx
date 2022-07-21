import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useNavigation } from '_core/hooks/useNavigation'
import { Card } from '_shared/components/Card'
import { ADDKILL_PAGE_ROUTE } from '../../../routes'
import { Kill } from '../domain/kill.model'
import { useKillsList } from './kills-list.hook'

export function KillsList() {
	const [kills, setKills] = useState<Kill[]>([])
	const { goTo } = useNavigation()

	const { getKills, deleteKill } = useKillsList()
	const fetchData = async () => {
		setKills(await getKills())
	}

	useEffect(() => {
		fetchData()
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

	return (
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
