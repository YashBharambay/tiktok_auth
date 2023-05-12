import {Router} from 'express';
const router = Router();

router.post('/', async (req, res) => {
  res.json({route: '/users', method: req.method});
});

router.post('/login', async (req, res) => {
    console.log('here');
    const csrfState = Math.random().toString(36).substring(2);
    let url = 'https://www.tiktok.com/v2/auth/authorize/';
    // the following params need to be in `application/x-www-form-urlencoded` format.
    url += `?client_key={${process.env.CLIENT_KEY}}`;
    url += '&scope=user.info.basic';
    url += '&response_type=code';
    url += '&state=' + csrfState;

    res.redirect(url);
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

export default router;
