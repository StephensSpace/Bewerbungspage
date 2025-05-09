import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle, CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { texts } from '../languageData/languageTexts';
import { ScrollService } from '../services/scroll.service';
import { slideInOutRight } from '../animations/slideInOut';

/**
 * Die Skills-Komponente stellt eine Liste von Fähigkeiten (Skills) dar
 * und zeigt sie mit entsprechenden SVG-Bildern an. Die Komponente implementiert
 * auch eine Scroll-Überwachung, die es ermöglicht, bestimmte Inhalte anzuzeigen,
 * wenn der Benutzer zu einem bestimmten Abschnitt scrollt.
 */
@Component({
  selector: 'app-skills',
  imports: [NgFor, NgIf, NgClass, NgStyle, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', 'skills.component.querry.scss'],
  animations: [slideInOutRight]
})
export class SkillsComponent implements AfterViewInit {
  /** Übersetzte Texte für die Skills-Komponente */
  public texts = texts;
  
  /** Steuert die Sichtbarkeit von Text und Button */
  public showTextAndButton = false;

  /**
   * Konstruktor der Skills-Komponente
   * @param languageService Der LanguageService zur Sprachverwaltung
   * @param scrollService Der ScrollService zum Scrollen und Beobachten von Elementen
   */
  constructor(public languageService: LanguageService, public scrollService: ScrollService) { }

  /** Referenz auf das Element, das zur Scroll-Beobachtung dient */
  @ViewChild('observerAnchor', { static: true }) anchor!: ElementRef;

  /**
   * Wird nach der Initialisierung der Ansicht aufgerufen, um das Scroll-Verhalten zu überwachen
   */
  ngAfterViewInit(): void {
    if (this.anchor?.nativeElement) {
      this.scrollService.observeElement(this.anchor.nativeElement, () => {
        document.body.style.overflowX = 'hidden';
        this.showTextAndButton = true;
        setTimeout(() => {
          document.body.style.overflowX = 'auto';
        }, 1450);
      });
    }
  }

  /** Liste der Fähigkeiten (Skills) mit Bild und Text */
  skillset = [
    { img: '/assets/skills/skill0.svg', text: "HTML" },
    { img: '/assets/skills/skill1.svg', text: "CSS" },
    { img: '/assets/skills/skill2.svg', text: "JavaScript", margin: -20 },
    { img: '/assets/skills/skill3.svg', text: "TypeScript", margin: -20 },
    { img: '/assets/skills/skill4.svg', text: "Angular" },
    { img: '/assets/skills/skill5.svg', text: "Firebase" },
    { img: '/assets/skills/skill6.svg', text: "Git" },
    { img: '/assets/skills/skill7.svg', text: "Rest Api" },
    { img: '/assets/skills/skill8.svg', text: "Scrum" },
    { img: '/assets/skills/skill9.svg', text: "Material Design" },
    { img: '/assets/skills/skill10.png', text: "" }
  ];

  /** Timeout-Referenz für Hover-Animation */
  private hoverTimeout: any;
  
  /** Timeout-Referenz für MouseLeave-Animation */
  private leaveTimeout: any;

  /** Sperrt Hover-Interaktionen, wenn diese auf true gesetzt ist */
  hoverLocked: boolean = false;

  /** Status der Hover-Interaktion */
  hover: boolean = false;

  /**
   * Wird aufgerufen, wenn die Maus über das letzte Skill-Element fährt.
   * Verhindert mehrere Hover-Interaktionen gleichzeitig.
   * @param last Gibt an, ob es sich um das letzte Element handelt
   */
  onMouseOver(last: boolean): void {
    if (last && !this.hoverLocked) {
      this.hoverLocked = true; // Sperrt weiteren MouseOver
      this.hoverTimeout = setTimeout(() => {
        this.hover = true;
      }, 100); 
    }
  }

  /**
   * Wird aufgerufen, wenn die Maus das Skill-Element verlässt.
   * Setzt Hover-Status zurück.
   */
  onMouseLeave(): void {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
    this.leaveTimeout = setTimeout(() => {
      this.hover = false;
      this.hoverLocked = false; // Entsperrt MouseOver nach dem Verlassen
    }, 200);
  }

  /**
   * Wird aufgerufen, wenn ein Hover-Ereignis auftritt.
   * Setzt den Hover-Status auf true, wenn es sich um das letzte Element handelt.
   * @param isLast Gibt an, ob es sich um das letzte Element handelt
   */
  onHover(isLast: boolean) {
    this.hover = isLast; // Setze hover auf true, wenn 'last' ist
  }
}