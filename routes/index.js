const router = require('express').Router();
// импортируем роутеры
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const authRouter = require('./auth');
const auth = require('../middlewares/auth');
const NotFound = require('../error/NotFound'); // 404

// запускаем
router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);
router.use('/', authRouter);

router.use((req, res, next) => {
  next(new NotFound(`По адресу ${req.path} ничего нет`));
});

module.exports = router;
