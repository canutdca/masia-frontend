import { lazy, Suspense, Fragment } from 'react'
import { Route } from 'wouter'

export const HOME_PAGE_ROUTE = '/'
export const USERS_PAGE_ROUTE = '/users'
export const ADDUSER_PAGE_ROUTE = '/add-user'
export const KILLS_PAGE_ROUTE = '/kills'
export const ADDKILL_PAGE_ROUTE = '/add-kill'

export function Routes() {
	return (
		<Fragment>
			<Route path={HOME_PAGE_ROUTE} component={renderHomePage} />
			<Route path={`${USERS_PAGE_ROUTE}`} component={renderUsersPage} />
			<Route path={`${ADDUSER_PAGE_ROUTE}`} component={renderAddUserPage} />
			<Route path={`${KILLS_PAGE_ROUTE}`} component={renderKillsPage} />
			<Route path={`${ADDKILL_PAGE_ROUTE}`} component={renderAddKillPage} />
		</Fragment>
	)
}

const renderHomePage = () => {
	const HomePage = lazy(() => import('pages/HomePage'))
	return (
		<Suspense fallback={<></>}>
			<HomePage />
		</Suspense>
	)
}


const renderUsersPage = () => {
	const ListUsersPage = lazy(() => import('pages/ListUsersPage'))
	return (
		<Suspense fallback={<></>}>
			<ListUsersPage />
		</Suspense>
	)
}

const renderAddUserPage = () => {
	const AddUserPage = lazy(() => import('pages/AddUserPage'))
	return (
		<Suspense fallback={<></>}>
			<AddUserPage />
		</Suspense>
	)
}

const renderKillsPage = () => {
	const ListKillsPage = lazy(() => import('pages/ListKillsPage'))
	return (
		<Suspense fallback={<></>}>
			<ListKillsPage />
		</Suspense>
	)
}

const renderAddKillPage = () => {
	const AddKillPage = lazy(() => import('pages/AddKillPage'))
	return (
		<Suspense fallback={<></>}>
			<AddKillPage />
		</Suspense>
	)
}