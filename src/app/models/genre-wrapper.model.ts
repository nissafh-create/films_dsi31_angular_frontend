import { Genre } from './genre.model';

export interface GenreWrapper {
    _embedded: {
        genres: Genre[];
    };
}

