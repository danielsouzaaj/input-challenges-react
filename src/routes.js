import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MiniBio from './pages/Mini-bio'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/Mini-bio' element={ <MiniBio/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp