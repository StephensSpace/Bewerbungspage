import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { MenuStateService } from '../services/menuState.service';
import { ScrollService } from '../services/scroll.service';
import { texts } from '../languageData/languageTexts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  /**
   * Enthält alle übersetzten Texte für das Menü
   */
  public texts = texts;

  /**
   * Observable, das den aktuellen Zustand des Menüs repräsentiert (offen/geschlossen)
   */
  menuOpen$: Observable<boolean>;

  /**
   * Initialisiert die Menü-Komponente mit Sprach-, Scroll- und Menüservices
   * @param languageService Service zur Verwaltung der Spracheinstellungen
   * @param scrollService Service zur Steuerung von Scroll-Aktionen
   * @param menuState Service zur Verwaltung des Menü-Zustands (offen/geschlossen)
   */
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService,
    public menuState: MenuStateService
  ) {
    this.menuOpen$ = this.menuState.menuOpen;
  }

  /**
   * Behandelt Navigation im mobilen Menü
   * - Verhindert Standardverhalten des Links
   * - Schließt das Menü mit Delay für Animation
   * - Scrollt sanft zum Ziel-Element
   * 
   * @param event Klick-Event vom Link
   * @param fragment ID des Ziel-Elements (z. B. "about", "contact")
   */
  handleMobileNavigation(event: Event, fragment: string): void {
  event.preventDefault();
  document.body.style.overflow = 'auto';
  this.menuState.toggleMenu();

  setTimeout(() => {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

      // Zweiter Scroll nach z. B. 1 Sekunde
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 1000); // Passe je nach Animationsdauer an
    }
  }, 300); // Zeit für Slide-Out-Menü
}

  /**
   * Schließt das Menü manuell und gibt Scrollverhalten zurück frei
   */
  toggleMenu(): void {
    document.body.style.overflow = 'auto';
    this.menuState.toggleMenu();
  }
}
