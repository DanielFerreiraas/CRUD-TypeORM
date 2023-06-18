import { inject, injectable } from 'tsyringe';

import { BaseControllerImpl } from '@/modules/base/BaseControllerimpl';

import { FilmDTO, CreateFilmDTO, UpdateFilmDTO } from '../../../dtos/FilmDTO';

import { FilmeService } from '../../../business/services/FilmService';

@injectable()
export class FilmControllerImpl extends BaseControllerImpl<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {

    constructor(
        @inject('FilmService')
        filmService: FilmeService
    ){ 
        super(filmService);
    }
}
