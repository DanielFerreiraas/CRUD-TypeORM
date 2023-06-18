import { BaseService } from "@/modules/base/BaseService";

import { FilmDTO, CreateFilmDTO, UpdateFilmDTO } from "../../dtos/FilmDTO";

export interface FilmeService extends BaseService<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {}