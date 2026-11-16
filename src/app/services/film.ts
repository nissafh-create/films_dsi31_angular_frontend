import { inject, Service } from '@angular/core';
import { Film } from '../models/film.model';
import { Genre } from '../models/genre.model';
import { GenreWrapper } from '../models/genre-wrapper.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Service()
export class FilmService {

    apiURL: string = 'http://localhost:8080/films/api';
    apiURLGenre: string = 'http://localhost:8080/films/genre';
    private http = inject(HttpClient);

    getFilms(): Observable<Film[]> {
        return this.http.get<Film[]>(this.apiURL + "/all");
    }

    addFilm(film: Film): Observable<Film> {
        return this.http.post<Film>(this.apiURL + "/addfilm", film, httpOptions);
    }

    deleteFilm(id: number): Observable<void> {
        const url = `${this.apiURL}/delfilm/${id}`;
        return this.http.delete<void>(url, httpOptions);
    }

    getFilmById(id: number): Observable<Film> {
        const url = `${this.apiURL}/getbyid/${id}`;
        return this.http.get<Film>(url);
    }

    updateFilm(film: Film): Observable<Film> {
        return this.http.put<Film>(this.apiURL + "/updatefilm", film, httpOptions);
    }

    listGenres(): Observable<GenreWrapper> {
        return this.http.get<GenreWrapper>(this.apiURLGenre);
    }

    searchByGenre(genreID: number): Observable<Film[]> {
        const url = `${this.apiURL}/filmsGenre/${genreID}`;
        return this.http.get<Film[]>(url);
    }

    searchByTitle(title: string): Observable<Film[]> {
        const url = `${this.apiURL}/filmsByName/${title}`;
        return this.http.get<Film[]>(url);
    }

    addGenre(genre: Genre): Observable<Genre> {
        return this.http.post<Genre>(this.apiURLGenre, genre, httpOptions);
    }

    updateGenre(genre: Genre): Observable<Genre> {
        const url = `${this.apiURLGenre}/${genre.genreID}`;
        return this.http.put<Genre>(url, genre, httpOptions);
    }
}
