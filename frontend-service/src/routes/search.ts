import { Router } from 'express';

const router = Router();

router.get('/search', (_, res) => {
  res.render('search');
});

export default router;
