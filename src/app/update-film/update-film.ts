import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilmService } from '../services/film';
import { Film } from '../models/film.model';
import { Genre } from '../models/genre.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-update-film',
  styles: ``,
  templateUrl: './update-film.html',
})
export class UpdateFilm implements OnInit {
  currentFilm!: Film;
  genres: Genre[] = [];
  updatedGenreId!: number;

  filmService = inject(FilmService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.filmService.listGenres().subscribe(wrappedGenres => {
      this.genres = wrappedGenres._embedded.genres;
    });

    const id = +this.route.snapshot.params['id'];
    this.filmService.getFilmById(id).subscribe(film => {
      this.currentFilm = film;
      if (this.currentFilm && this.currentFilm.genre) {
        this.updatedGenreId = this.currentFilm.genre.genreID;
      }
    });
  }

  updateFilm() {
    this.currentFilm.genre = this.genres.find(g => g.genreID == this.updatedGenreId);
    this.filmService.updateFilm(this.currentFilm).subscribe(() => {
      this.router.navigate(['/films']);
    });
  }

}
