import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from '../models/film.model';
import { Genre } from '../models/genre.model';
import { FilmService } from '../services/film';

@Component({
  imports: [FormsModule],
  selector: 'app-add-film',
  styles: ``,
  templateUrl: './add-film.html',
})
export class AddFilm implements OnInit {

  genres: Genre[] = [];
  newGenreId!: number;
  
  newFilm: Film = {} as Film;
  message!: string;

  private filmService = inject(FilmService);
  private router = inject(Router);

  ngOnInit(): void {
    this.filmService.listGenres().subscribe(wrappedGenres => {
      this.genres = wrappedGenres._embedded.genres;
    });
  }

  addFilm() {
    this.newFilm.genre = this.genres.find(g => g.genreID == this.newGenreId);
    this.filmService.addFilm(this.newFilm).subscribe(() => {
      this.router.navigate(['/films']);
    });
  }

}
