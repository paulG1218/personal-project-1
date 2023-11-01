import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './pages/Root.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import Homepage from './pages/Homepage.jsx'
import Shop from './pages/Shop.jsx'
import AllClimbs from './pages/AllClimbs.jsx'
import ClimbPage from './pages/ClimbPage.jsx'
import ItemPage from './pages/ItemPage.jsx'
import Login from './pages/Login.jsx';
import axios from 'axios';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />} errorElement={<ErrorPage/>} >

        // Homepage
        <Route index element={<Homepage />} />

        // Climbs
        <Route 
            path='/climbs' 
            element={<AllClimbs />} 
            loader={async () => {
                const res = await axios.get('/api/climbs')
                return {climbs: res.data}
            }}
        />

        // Shop
        <Route 
            path='/shop' 
            element={<Shop />} 
            loader={async () => {
                const res = await axios.get('/api/shop')
                return {shop: res.data}
            }}
        />

        //Single climb
        <Route 
            path='/climbs/:climbId' 
            element={<ClimbPage />} 
            loader={async ({params}) => {
                const res = await axios.get(`/api/climbs/${params.climbId}`)
                return {climb: res.data}
            }}
        />

        //Single shop item
        <Route 
            path='/shop/:itemId' 
            element={<ItemPage />} 
            loader={async ({params}) => {
                const res = await axios.get(`/api/shop/${params.itemId}`)
                return {item: res.data}
            }}
        />

        //Login

        <Route
            path='/login'
            element={<Login/>}
        />

        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
