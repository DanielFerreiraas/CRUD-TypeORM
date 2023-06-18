 import { FilmDTO, CreateFilmDTO, UpdateFilmDTO } from "../../dtos/FilmDTO";

 import { BaseRepository } from "@/modules/base/BaseRepository";

 export interface FilmRepository extends BaseRepository<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {}