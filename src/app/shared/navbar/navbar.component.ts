import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent {
  authGuard = inject(AuthGuard);
  router = inject(Router);
  email = '';

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
  }

  closeSession() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
