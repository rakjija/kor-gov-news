import { Router } from 'express';

const router = Router();

router.get('/search', (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.redirect('/login');
  }

  res.render('search', { username: user.username });
});

export default router;
