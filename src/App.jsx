import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './pages/Root.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/Shop.jsx'
import Climbs from './pages/Climbs.jsx'
import ClimbPage from './pages/ClimbPage.jsx'
import ItemPage from './pages/ItemPage.jsx'
import axios from 'axios';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />} errrorElement={<ErrorPage/>} >

        // Homepage
        <Route index element={<Homepage />} />

        // Climbs
        <Route 
            path='/climbs' 
            element={<Climbs />} 
            loader={async () => {
                const res = await axios.get('/api/climbs')
                return {climbs: res.data}
            }}
        />

        // Shop
        <Route path='/shop' element={<Shop />} />

        //Single climb
        <Route path='/climbs/:climbId' element={<ClimbPage />} />

        //Single shop item
        <Route path='/shop/:itemId' element={<ItemPage />} />

        //

        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
