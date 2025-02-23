import { lazy } from 'react'
import { Route, Routes } from 'react-router'

const Authentication = lazy(() => import('./app/Authentication/Authentication'))

const App = () => {
    return (
        <Routes>
            <Route path="/authentication/*" element={<Authentication />} />
        </Routes>
    )
}

export default App
