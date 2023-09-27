const auth = require('../controllers/auth');

module.exports = app => {
    const accounts = require('../controllers/account.controller');
    var router = require('express').Router();

    app.use((req,res,next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'Authorization, Origin, Content-Type, Accept'
        );
        next();
    });

    router.post('/sign-up', accounts.create);
    router.post('/sign-in', accounts.login);
    router.get('/profile/:username', accounts.getProfile);
    router.get('/profile/update/:id', accounts.update);
    router.put('/profile/:id/username',[auth.authenticateToken], accounts.changeUsername);
    router.put('/profile/:id/password',[auth.authenticateToken], accounts.changePassword);

    app.use('/account', router);
}