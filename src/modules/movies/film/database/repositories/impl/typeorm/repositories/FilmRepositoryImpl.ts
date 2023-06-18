import { Film } from "../entities/film.entity";

import { FilmDTO, CreateFilmDTO, UpdateFilmDTO } from "@/modules/movies/film/dtos/FilmDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class FilmRepositoryImpl extends BaseRepositoryImpl<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {

    constructor() {
        super('filmID', Film);
    }
}