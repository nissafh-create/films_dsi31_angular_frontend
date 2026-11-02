import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../models/film.model';
import { FilmService } from '../services/film';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  selector: 'app-search-by-name',
  styles: ``,
  templateUrl: './search-by-name.html',
})
export class SearchByName implements OnInit {
  films: Film[] = [];
  allFilms: Film[] = [];
  searchTerm: string = '';

  private filmService = inject(FilmService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.filmService.getFilms().subscribe({
      next: (films) => {
        this.films = films;
        this.allFilms = films;
        this.cdr.markForCheck();
      },
      error: (err) => console.error(err)
    });
  }

  // API-based search (Step 16 / Improvement)
  searchFilms(): void {
    if (this.searchTerm) {
      this.filmService.searchByTitle(this.searchTerm).subscribe({
        next: (films) => {
          this.films = films;
          this.cdr.markForCheck();
        }
      });
    } else {
      this.filmService.getFilms().subscribe({
        next: (films) => {
          this.films = films;
          this.cdr.markForCheck();
        }
      });
    }
  }

  // KeyUp-based local search (Step 19)
  onKeyUp(filterText: string): void {
    this.films = this.allFilms.filter(item =>
      item.filmTitle.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
