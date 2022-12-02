import { Suspense } from 'react';
import { NavLink, Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
	return (
		<Suspense fallback={ <span>Loading...</span> }>
			<Router>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React logo" />

						<ul>
							{
								routes.map(({ path, name }) => (
									<li key={ path }>
										<NavLink
											to={ path }
											activeClassName="nav-active"
										>{ name }</NavLink>
									</li>
								))
							}
						</ul>
					</nav>

					<Switch>
						{
							routes.map(({ component:Component, path }) => (
								<Route
									key={ path }
									path={ path }
									render={ () => <Component /> }
								/>
							))
						}
						<Redirect to={ routes[0].path } />
					</Switch>
				</div>
			</Router>
		</Suspense>
	);
}