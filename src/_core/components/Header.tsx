import styled from '@emotion/styled'
import { useNavigation } from '_core/hooks/useNavigation'
import { HOME_PAGE_ROUTE, KILLS_PAGE_ROUTE, USERS_PAGE_ROUTE } from '../../routes'

export function Header() {
	const { goTo } = useNavigation()

	const goToHome = () => goTo(HOME_PAGE_ROUTE)
	const goToUsers = () => goTo(USERS_PAGE_ROUTE)
	const goToKills = () => goTo(KILLS_PAGE_ROUTE)

	return (
		<Root>
			<H1 onClick={goToHome}>Masia</H1>
			<H3 onClick={goToUsers}>Users</H3>
			<H3 onClick={goToKills}>Maneras de matar</H3>
		</Root>
	)
}

const Root = styled.div`
	color: white;
	background-color: #1976d2;
	min-height: 64px;
	padding: .3em 24px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`

const H1 = styled.h1`
	font-weight: 300;
	font-size: 3.75rem;
	line-height: 1.2;
	letter-spacing: -0.00833em;
	font-family: "Roboto","Helvetica","Arial",sans-serif;
	margin: 0;
	cursor: pointer;
	transition: color .2s ease-in-out;
	&:hover {
		color: #c3c3c3;
	}
`


const H3 = styled.h3`
	font-weight: 300;
	font-size: 1.75rem;
	line-height: 1.2;
	letter-spacing: -0.00833em;
	font-family: "Roboto","Helvetica","Arial",sans-serif;
	margin: 0;
	cursor: pointer;
	transition: color .2s ease-in-out;
	&:hover {
		color: #c3c3c3;
	}
`
