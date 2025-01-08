import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

import { SupabaseAuthService } from './pages/auth.service';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    @if (authService.loggedIn()) {
      <div>Logged In</div>
      <button (click)="logout()">Logout</button>
    } @else {
      <a routerLink="/login">Login</a>
    }

    | <a routerLink="/countries">Countries</a>
    | <a routerLink="/protected">Protected</a>
    <router-outlet />
  `,
  styles: `
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `,
})
export class AppComponent {
  authService = inject(SupabaseAuthService);
  router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(() => this.authService.refresh())
    ).subscribe();
  }

  logout() {
    this.authService.logout();
  }
}
