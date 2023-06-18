export class FilmDTO {
    filmID: number;
    title: string;
    description: string;
    releasyYear: number;
    languageId: number;
    rentalDuration: number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: string;
    lastUpdate: Date;
    specialFeatures: string;
    fulltext: string;
}

export type CreateFilmDTO = Omit<FilmDTO, 'filmId' | 'lastUpdate'>;
export type UpdateFilmDTO = Partial<FilmDTO>;