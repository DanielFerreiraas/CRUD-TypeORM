import { container } from 'tsyringe';

import { FilmControllerImpl } from '@/modules/movies/film/api/controllers/impl/FilmControllerImpl';
import { LanguageControllerImpl } from '@/modules/movies/language/api/controllers/impl/LanguageControllerImpl';

import { FilmServiceImpl } from '@/modules/movies/film/business/services/impl/FilmServiceImpl';
import { LanguageServiceImpl } from '@/modules/movies/language/business/service/impl/LanguageServiceImpl';

import { FilmRepositoryImpl } from '@/modules/movies/film/database/repositories/impl/typeorm/repositories/FilmRepositoryImpl';
import { LanguageRepositoryImpl } from '@/modules/movies/language/database/impl/typeorm/repositories/LanguageRepositoryImpl';

container.register("FilmController", {useClass: FilmControllerImpl});
container.register("LanguageController", {useClass: LanguageControllerImpl});

container.register("FilmService", {useClass: FilmServiceImpl});
container.register("LanguageService", {useClass: LanguageServiceImpl});

container.register("FilmRepository", {useClass: FilmRepositoryImpl});
container.register("LanguageRepository", {useClass: LanguageRepositoryImpl});