import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import Register from './pages/Register';
import CreateClimb from './pages/CreateClimb';
import Profile from './pages/Profile.jsx';
import CreateItem from './pages/CreateItem.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />} >

        // Homepage
        <Route 
            index 
            element={<Homepage />} 
            loader={async () => {
                const climbs = await axios.get('/api/climbs')
                const shop = await axios.get('/api/shop')
                return {climbs: climbs.data, shop: shop.data}
            }}
        />

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

        //Register
        
        <Route
            path='/register'
            element={<Register/>}
        />

        //Create a climb

        <Route 
            path='/createClimb'
            element={<CreateClimb/>}
        />

        //User Profile

        <Route 
            path='/profile/:userId'
            element={<Profile/>}
            loader={async ({params}) => {
                const res = await axios.get(`/api/profile/${params.userId}`)
                return {user: res.data.user}
            }}
        />

        //Create shop item

        <Route
            path='/createItem'
            element={<CreateItem/>}
        />

        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
