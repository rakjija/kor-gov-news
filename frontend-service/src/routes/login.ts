import { Router } from 'express';

const router = Router();

router.get('/login', (_, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt: ${username}, ${password}`);
  res.send('Processing login');
});

export default router;
