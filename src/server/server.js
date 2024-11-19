import express from 'express';
import routes from '../routes/routes.js';

// Settings
const app = express();
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(routes);

// Not found route function
const notFound = (req, res) => {
    res.status(404).send({ 'Bad request': req.originalUrl + ' ' + 'not found.' })
}

// Server
const server = () => {
    app.listen(app.get('port'));
    app.use(notFound);
    console.log(`\x1B[34m Local server started:`);
    console.log(`\x1B[36m https://localhost:${app.get('port')}`);
}

export default server;