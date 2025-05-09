import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { LanguageService } from '../services/language.service';
import { CommonModule } from '@angular/common';
import { texts } from '../languageData/languageTexts';
import { slideInOutRight, slideInOutLeft } from '../animations/slideInOut';
import { ScrollService } from '../services/scroll.service';

/**
 * Komponente zur Darstellung des "Über mich"-Bereichs.
 * Sie enthält Texte, Animationen und ein Bild, das bei Scroll-Trigger eingeblendet wird.
 */
@Component({
  selector: 'app-about-me',
  imports: [SkillsComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [slideInOutRight, slideInOutLeft]
})
export class AboutMeComponent implements AfterViewInit {

  /**
   * Sprachabhängige Texte für die Komponente.
   */
  public texts = texts;

  /**
   * Steuert die Sichtbarkeit des rechten Bildes in der Ansicht.
   */
  showRightPic: boolean = false;

  /**
   * Steuert die Sichtbarkeit des linken Textbereichs in der Ansicht.
   */
  showLeftText: boolean = false;

  /**
   * Konstruktor zur Initialisierung der benötigten Services.
   * @param languageService Service zur Erkennung und Verwaltung der aktuellen Sprache.
   * @param scrollService Service zur Scroll-Überwachung von Elementen.
   */
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService
  ) {}

  /**
   * Referenz auf das DOM-Element, das als Trigger für die Scroll-Beobachtung dient.
   */
  @ViewChild('observerAnchor3', { static: true }) anchor!: ElementRef;

  /**
   * Lifecycle-Hook: Wird aufgerufen, nachdem die View initialisiert wurde.
   * Hier wird das Scroll-Tracking eingerichtet, um Animationen auszulösen,
   * wenn das beobachtete Element in den Viewport kommt.
   */
  ngAfterViewInit(): void {
    if (this.anchor?.nativeElement) {
      this.scrollService.observeElement(this.anchor.nativeElement, () => {
        // Verhindert horizontales Scrollen während der Animation
        document.body.style.overflowX = 'hidden';
        this.showRightPic = true;
        this.showLeftText = true;
        // Setzt overflowX nach 1,5 Sekunden wieder zurück
        setTimeout(() => {
          document.body.style.overflowX = 'auto';
        }, 1470);
      });
    }
  }
}