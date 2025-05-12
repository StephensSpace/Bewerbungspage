import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found">
      <h1>404 – Seite nicht gefunden</h1>
      <p>Diese Seite existiert leider nicht.</p>
      <a routerLink="/">Zur Startseite</a>
    </div>
  `,
  styles: [`
    .not-found {
      text-align: center;
      padding: 4rem;
      color: #9747FF;
      font-size: 24px;
    }
  `]
})
export class NotFoundComponent {}
