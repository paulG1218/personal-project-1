import express from 'express'
import session from 'express-session';
import ViteExpress from 'vite-express'

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