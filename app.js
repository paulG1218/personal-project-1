import express from 'express'
import session from 'express-session';
import ViteExpress from 'vite-express'
import {Climb, User, Shop} from './src/model.js'
import morgan from 'morgan';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

function loginRequired(req, res, next) {
    if (!req.session.userId) {
        res.status(401).json({ error: 'Unauthorized' });
    } else {
        next();
    }
}

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

app.post('/api/auth', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });
  
    if (user && user.password === password) {
      req.session.userId = user.userId
      res.json({ success: true })
    } else {
      res.json({ success: false })
    }
  })



ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));