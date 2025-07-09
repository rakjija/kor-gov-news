import { Router } from 'express';

const router = Router();

router.get('/login', (_, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Username is required');
  }

  // TODO: using auth-service
  req.session.user = { username };
  res.send('Processing login');
});

export default router;
