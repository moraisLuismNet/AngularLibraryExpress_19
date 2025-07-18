import { inject, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './start/login/login.component';
import { NotFoundComponent } from './start/not-found/not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
import { LibraryComponent } from './library/library.component';
import { AuthorsComponent } from './library/authors/authors.component';
import { PublishingHousesComponent } from './library/publishing-houses/publishing-houses.component';
import { BooksComponent } from './library/books/books.component';

export const canActivate = (authGuard = inject(AuthGuard)) =>
  authGuard.isLoggedIn();

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'library',
    component: LibraryComponent,
    children: [
      { path: '', redirectTo: 'publishingHouses', pathMatch: 'full' },
      { path: 'publishingHouses', component: PublishingHousesComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'books', component: BooksComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
