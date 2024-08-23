import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MiniBio from './pages/Mini-bio'

function RoutesApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/Mini-bio' element={ <MiniBio/> } />
            </Routes>
        </HashRouter>
    )
}

export default RoutesApp