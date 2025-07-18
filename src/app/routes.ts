import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { AuthorsComponent } from './library/authors/authors.component';
import { PublishingHousesComponent } from './library/publishing-houses/publishing-houses.component';
import { BooksComponent } from './library/books/books.component';
import { LoginComponent } from './start/login/login.component';
import { NotFoundComponent } from './start/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'library',
    component: LibraryComponent,
    children: [
      { path: 'authors', component: AuthorsComponent },
      { path: 'publishingHouses', component: PublishingHousesComponent },
      { path: 'books', component: BooksComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
