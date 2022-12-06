import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Routes
} from 'react-router-dom';

import {
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage
} from '../03-forms/pages';

import logo from '../logo.svg';
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';

export const Navigation = () => {
	return (
		<>
			<Router>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt="React-logo" />

						<ul>
							<li>
								<NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
							</li>

							<li>
								<NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
							</li>

							<li>
								<NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
							</li>

							<li>
								<NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
							</li>

							<li>
								<NavLink to="/formik-abstraction" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
							</li>

							<li>
								<NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
							</li>
						</ul>
					</nav>

					<Routes>
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/formik-basic' element={<FormikBasicPage/>} />
						<Route path='/formik-yup' element={<FormikYupPage/>} />
						<Route path='/formik-components' element={<FormikComponents/>} />
						<Route path='/formik-abstraction' element={<FormikAbstraction/>} />
						<Route path='/' element={<h1>Home page</h1>} />
						{/* <Route path='/*' element={<Navigate to="/home" replace />} /> */}
					</Routes>

				</div>
			</Router>
		</>
	);
}