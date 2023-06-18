import { Router } from 'express';

import filmRouter from '@/modules/movies/film/api/routes/film.routes';

const router = Router();

router.use('/films', filmRouter);

export default router;
