import { Routes } from '@angular/router';
import { Films } from './films/films';
import { AddFilm } from './add-film/add-film';
import { UpdateFilm } from './update-film/update-film';
import { SearchByGenre } from './search-by-genre/search-by-genre';
import { SearchByName } from './search-by-name/search-by-name';
import { ListGenres } from './list-genres/list-genres';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { filmGuard } from './guards/film.guard';

export const routes: Routes = [
    { path: "films", component: Films },
    { path: "add-film", component: AddFilm, canActivate: [filmGuard] },
    { path: "update-film/:id", component: UpdateFilm, canActivate: [filmGuard] },
    { path: "search-by-genre", component: SearchByGenre },
    { path: "search-by-name", component: SearchByName },
    { path: "list-genres", component: ListGenres },
    { path: "login", component: Login },
    { path: "app-forbidden", component: Forbidden },
    { path: "", redirectTo: "films", pathMatch: "full" }
];
