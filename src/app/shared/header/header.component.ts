import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { MenuStateService } from '../../services/menuState.service';
import { NgClass, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { texts } from '../../languageData/languageTexts';
import { MenuComponent } from '../../menu/menu.component';
import { Observable } from 'rxjs';
import { slideInOutMenu } from '../../animations/slideInOut';

/**
 * Die Header-Komponente stellt den oberen Bereich der Seite dar.
 * Sie enthält das Menü und steuert das Öffnen und Schließen des Menüs.
 */
@Component({
  selector: 'app-header',
  imports: [RouterModule, NgClass, CommonModule, NgIf, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideInOutMenu]
})
export class HeaderComponent {
  /** Übersetzte Texte für die Header-Komponente */
  public texts = texts;
  
  /** Observable, das den Zustand des Menüs anzeigt */
  menuOpen$: Observable<boolean>;

  /**
   * Konstruktor der Header-Komponente
   * @param languageService Der LanguageService zur Sprachverwaltung
   * @param scrollService Der ScrollService zum Scrollen zu Fragmenten
   * @param menuState Der MenuStateService zur Verwaltung des Menüzustands
   */
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService,
    public menuState: MenuStateService
  ) {
    this.menuOpen$ = this.menuState.menuOpen;
  }

  /**
   * Umschaltet den Menüzustand und setzt das overflow auf 'hidden', 
   * um das Menü anzuzeigen.
   */
  toggleMenu() {
    document.body.style.overflow = 'hidden';
    this.menuState.toggleMenu();  // Menü umschalten
  }
}
