import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">MARLIN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Головна</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/hair" routerLinkActive="active">Перукарня</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/lashes" routerLinkActive="active">Вії</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/manicure" routerLinkActive="active">Манікюр</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
