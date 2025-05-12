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
  showTextAndPic: boolean = false;


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
      this.tryStartAnimation();
    });
  }
}

private tryStartAnimation(): void {
  // Falls schon blockiert → versuche es später nochmal
  if (document.body.style.overflowX === 'hidden') {
    setTimeout(() => this.tryStartAnimation(), 300);
    return;
  }

  // Setze overflowX, starte Animation
  document.body.style.overflowX = 'hidden';
  this.showTextAndPic = true;

  // Setze overflowX nach individueller Zeit zurück (z. B. 700ms)
  setTimeout(() => {
    document.body.style.overflowX = 'auto';
  }, 700); // Oder deine Komponentenspezifische Zeit
}
}