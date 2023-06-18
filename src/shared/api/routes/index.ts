import { Router } from 'express';

import filmRouter from '@/modules/movies/film/api/routes/film.routes';
import languageRouter from '@/modules/movies/language/api/routes/language.routes';

const router = Router();

router.use('/films', filmRouter);
router.use('/languages', languageRouter);

export default router;
