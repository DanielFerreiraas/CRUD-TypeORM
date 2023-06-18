import { container } from 'tsyringe';

import { FilmControllerImpl } from '@/modules/movies/film/api/controllers/impl/FilmControllerImpl';

import { FilmServiceImpl } from '@/modules/movies/film/business/services/impl/FilmServiceImpl';

import { FilmRepositoryImpl } from '@/modules/movies/film/database/repositories/impl/typeorm/repositories/FilmRepositoryImpl';

container.register("FilmController", {useClass: FilmControllerImpl});

container.register("FilmService", {useClass: FilmServiceImpl});

container.register("FilmRepository", {useClass: FilmRepositoryImpl});