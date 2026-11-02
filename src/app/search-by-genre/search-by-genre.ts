import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../models/film.model';
import { Genre } from '../models/genre.model';
import { FilmService } from '../services/film';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-search-by-genre',
  styles: ``,
  templateUrl: './search-by-genre.html',
})
export class SearchByGenre implements OnInit {
  films: Film[] = [];
  selectedGenreId: number | null = null;
  genres: Genre[] = [];

  private filmService = inject(FilmService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.filmService.listGenres().subscribe(genreWrapper => {
      this.genres = genreWrapper._embedded.genres;
      this.cdr.markForCheck();
    });

    this.loadAllFilms();
  }

  loadAllFilms(): void {
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
      this.cdr.markForCheck();
    });
  }

  onChange(): void {
    if (this.selectedGenreId) {
      this.filmService.searchByGenre(this.selectedGenreId).subscribe(films => {
        this.films = films;
        this.cdr.markForCheck();
      });
    } else {
      this.loadAllFilms();
    }
  }
}
