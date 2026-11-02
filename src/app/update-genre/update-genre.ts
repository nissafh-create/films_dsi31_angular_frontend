import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Genre } from '../models/genre.model';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-update-genre',
  styles: ``,
  templateUrl: './update-genre.html',
})
export class UpdateGenre implements OnInit {

  @Input()
  genre!: Genre;

  @Input()
  isAdding: boolean = true;

  @Output()
  genreUpdated = new EventEmitter<Genre>();

  ngOnInit(): void {
    console.log('ngOnInit of UpdateGenre component:', this.genre);
  }

  saveGenre(): void {
    this.genreUpdated.emit(this.genre);
  }

}

