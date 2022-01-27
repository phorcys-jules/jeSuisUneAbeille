const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const mapRouter = require('./routes/map');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const gameRouter = require('./routes/game');
const mapGameRouter = require('./routes/mapGame');
const infosRouter = require('./routes/infos');
const plantsRouter = require('./routes/plants');
const leaderboardRouter = require('./routes/leaderboard');

let app = express();

const PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/map', mapRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/game', gameRouter);
app.use('/mapGame', mapGameRouter);
app.use('/infos', infosRouter);
app.use('/plants', plantsRouter);
app.use('/plantes', plantsRouter);
app.use('/leaderboard', leaderboardRouter);

module.exports = app;

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
