import { lazy, Suspense, Fragment } from 'react'
import { Route } from 'wouter'

export const HOME_ROUTE = '/'
export const ADDUSER_PAGE_ROUTE = '/add-user'

export function Routes() {
	return (
		<Fragment>
			<Route path={HOME_ROUTE} component={renderHomePage} />
			<Route path={`${ADDUSER_PAGE_ROUTE}`} component={renderGroupPage} />
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

const renderGroupPage = () => {
	const GroupPage = lazy(() => import('pages/AddUser'))
	return (
		<Suspense fallback={<></>}>
			<GroupPage />
		</Suspense>
	)
}
