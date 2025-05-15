import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { texts } from '../languageData/languageTexts';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-here-iam',
  imports: [CommonModule],
  templateUrl: './here-iam.component.html',
  styleUrls: ['./here-iam.component.scss',
    './here-iam.component.querrys.scss',
    './here-iam.component.querrys2.scss']
})
/**
 * Repräsentiert die "Here I am"-Sektion der Seite.
 * Zeigt Textinhalte abhängig von der aktuellen Sprache.
 * Optional vorbereitet für Scroll-Animationen oder -Beobachtungen.
 */
export class HereIamComponent {
  /** Enthält die Textinhalte in mehreren Sprachen */
  public texts = texts;

  constructor(
    /** Sprache wird über LanguageService gesteuert */
    public languageService: LanguageService,

    /**
     * Optionaler ScrollService, z. B. für spätere Scroll-basierte Effekte
     * oder Sichtbarkeits-Trigger von DOM-Elementen.
     */
    public scrollService: ScrollService
  ) { }
}