import { lazy } from 'react'
import { Route, Routes } from 'react-router'
import { AuthenticationRoutes } from './authentication-routes'

const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))

const Authentication = () => {
  return (
    <Routes>
      <Route path={AuthenticationRoutes.login} element={<Login />} />
      <Route path={AuthenticationRoutes.register} element={<Register />} />
    </Routes>
  )
}

export default Authentication
