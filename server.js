import express from 'express';
import compression from 'compression';
import ssr from './routes/ssr';
import hbs from 'express-handlebars';

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

app.use('/firstssr', ssr);

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.info(`Running on port ${port}. . .`);
});