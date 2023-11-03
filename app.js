import express from 'express'
import session from 'express-session';
import ViteExpress from 'vite-express'
import {Climb, User, Shop} from './model.js'
import morgan from 'morgan';
import authFunctions from './handlers/authHandlers.js';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

app.get('/api/climbs', async (req, res) => {
    const allClimbs = await Climb.findAll()
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



ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));