import express from 'express';
import compression from 'compression';
import routes from './routes/routes';
import hbs from 'express-handlebars';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

const app = express();

app.use(compression());
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

app.use('/', routes);

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.info(`Running on port ${port}. . .`);
});