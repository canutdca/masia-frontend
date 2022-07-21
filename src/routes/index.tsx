import { lazy, Suspense, Fragment } from 'react'
import { Route } from 'wouter'

export const HOME_PAGE_ROUTE = '/'
export const ADDUSER_PAGE_ROUTE = '/add-user'
export const KILLS_PAGE_ROUTE = '/kills'
export const ADDKILL_PAGE_ROUTE = '/add-kill'

export function Routes() {
	return (
		<Fragment>
			<Route path={HOME_PAGE_ROUTE} component={renderHomePage} />
			<Route path={`${ADDUSER_PAGE_ROUTE}`} component={renderAddUserPage} />
			<Route path={`${KILLS_PAGE_ROUTE}`} component={renderKillsPage} />
			<Route path={`${ADDKILL_PAGE_ROUTE}`} component={renderAddKillPage} />
		</Fragment>
	)
}

const renderHomePage = () => {
	const HomePage = lazy(() => import('pages/Home'))
	return (
		<Suspense fallback={<></>}>
			<HomePage />
		</Suspense>
	)
}

const renderAddUserPage = () => {
	const AddUserPage = lazy(() => import('pages/AddUser'))
	return (
		<Suspense fallback={<></>}>
			<AddUserPage />
		</Suspense>
	)
}

const renderKillsPage = () => {
	const AddUserPage = lazy(() => import('pages/Kills'))
	return (
		<Suspense fallback={<></>}>
			<AddUserPage />
		</Suspense>
	)
}

const renderAddKillPage = () => {
	const AddKillPage = lazy(() => import('pages/AddKill'))
	return (
		<Suspense fallback={<></>}>
			<AddKillPage />
		</Suspense>
	)
}