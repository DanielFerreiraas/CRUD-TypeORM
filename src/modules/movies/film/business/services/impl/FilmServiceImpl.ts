import { injectable, inject} from 'tsyringe';

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl';

import { FilmDTO, CreateFilmDTO, UpdateFilmDTO } from '../../../dtos/FilmDTO';

import { FilmRepository } from '../../../database/repositories/FilmRepository';

@injectable()
export class FilmServiceImpl extends BaseServiceImpl<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {
    
    constructor(
        @inject('FilmRepository')
        filmRepository: FilmRepository
    ) {
        super(filmRepository);
    }
}