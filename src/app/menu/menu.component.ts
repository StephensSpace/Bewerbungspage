import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { MenuStateService } from '../services/menuState.service';
import { ScrollService } from '../services/scroll.service';
import { texts } from '../languageData/languageTexts';
import { Observable } from 'rxjs';
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ],
  host: { '[@slideInOut]': '' } // <- Das bindet die Animation an die ganze Komponente!
})
export class MenuComponent {
  public texts = texts;
  menuOpen$: Observable<boolean>;

  constructor(public languageService: LanguageService,
    public scrollService: ScrollService,
    public menuState: MenuStateService
  ) { 
    this.menuOpen$ = this.menuState.menuOpen;
  }

  handleMobileNavigation(event: Event, fragment: string) {
    event.preventDefault();
    document.body.style.overflow = 'auto';
  
    this.menuState.toggleMenu(); // Menü schließen
  
    setTimeout(() => {
      const el = document.getElementById(fragment);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Zeit für Slide-Out-Animation
  }

  toggleMenu() {    
    document.body.style.overflow = 'auto';
    this.menuState.toggleMenu(); // Menü schließen
  }

}
