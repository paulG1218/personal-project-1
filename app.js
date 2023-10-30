import express from 'express'
import session from 'express-session';
import ViteExpress from 'vite-express'
import {Climb, User, Shop} from './src/model.js'
import morgan from 'morgan';

const app = express();
const port = '6969';
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

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));