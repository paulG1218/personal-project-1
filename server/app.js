import express from 'express'
import session from 'express-session';
import ViteExpress from 'vite-express'
import {Climb, User, Shop} from '../db/model.js'
import morgan from 'morgan';
import authFunctions from './handlers.js';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

app.get('/api/climbs', async (req, res) => {
    const allClimbs = await Climb.findAll()
    console.log(allClimbs)
    res.json(allClimbs)
})

app.get('/api/climbs/:climbId', async (req, res) => {
    const {climbId} = req.params
    const climb = await Climb.findByPk(climbId)
    res.json(climb)
})

app.get('/api/shop', async (req, res) => {
    const shop = await Shop.findAll()
    res.json(shop)
})

app.get('/api/shop/:itemId', async (req, res) => {
    const {itemId} = req.params
    const item = await Shop.findByPk(itemId)
    res.json(item)
})

app.post('/api/auth', authFunctions.login)

app.get('/sessionCheck', authFunctions.sessionCheck)

app.get('/logout', authFunctions.logout)

app.post('/api/register', authFunctions.register)

app.post('/api/createClimb', authFunctions.createClimb)

app.put('/api/editClimb/:climbId', authFunctions.editClimb)

app.delete('/api/deleteClimb/:climbId', authFunctions.deleteClimb)

app.get('/api/profile/:userId', authFunctions.userProfile)

app.put('/api/profile/:userId', authFunctions.changeUserProfile)

app.delete('/api/profile/:userId', authFunctions.deleteUser)

app.put('/api/newAdmin', authFunctions.addNewAdmin)

app.post('/api/createItem', authFunctions.createItem)

app.put('/api/editItem/:itemId', authFunctions.editItem)

app.delete('/api/deleteItem/:itemId', authFunctions.deleteItem)

app.get('/api/userLikes', authFunctions.getUserLikes)

app.post('/api/addLike', authFunctions.addLike)

app.get('/api/climbLikes/:climbId', authFunctions.getClimbLikes)


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));