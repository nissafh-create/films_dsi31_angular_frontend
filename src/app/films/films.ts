import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { FilmService } from '../services/film';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-films',
  styles: ``,
  templateUrl: './films.html',
})
export class Films implements OnInit {

  films: Film[] = [];
  private filmService = inject(FilmService);
  public authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getFilms().subscribe({
      next: (films) => {
        this.films = films;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Failed to load films:', err);
      }
    });
  }

  deleteFilm(f: Film) {
    let conf = confirm(`Are you sure you want to delete ${f.filmTitle} ?`);
    if (conf) {
      this.filmService.deleteFilm(f.filmID).subscribe(() => {
        this.loadFilms();
      });
    }
  }

}
