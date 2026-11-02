import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Genre } from '../models/genre.model';
import { FilmService } from '../services/film';
import { UpdateGenre } from '../update-genre/update-genre';

@Component({
  imports: [CommonModule, UpdateGenre],
  selector: 'app-list-genres',
  styles: ``,
  templateUrl: './list-genres.html',
})
export class ListGenres implements OnInit {

  genres: Genre[] = [];
  updatedGenre: Genre = { genreID: 0, genreName: '' };
  isAdding: boolean = true;

  private filmService = inject(FilmService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres(): void {
    this.filmService.listGenres().subscribe(genreWrapper => {
      this.genres = genreWrapper._embedded.genres;
      this.cdr.markForCheck();
    });
  }

  genreUpdated(genre: Genre): void {
    console.log('Genre updated event:', genre);
    this.filmService.addGenre(genre).subscribe(() => {
      this.loadGenres();
      this.updatedGenre = { genreID: 0, genreName: '' };
      this.isAdding = true;
    });
  }

  updateGenre(genre: Genre): void {
    this.updatedGenre = genre;
    this.isAdding = false;
  }

}

