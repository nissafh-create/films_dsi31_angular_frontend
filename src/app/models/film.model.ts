import { Genre } from './genre.model';

export interface Film {
    filmID: number;
    filmTitle: string;
    filmDescription: string;
    filmReleaseDate: Date;
    filmDuration: number;
    genre?: Genre;
}

