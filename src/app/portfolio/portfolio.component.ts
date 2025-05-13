import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { texts } from '../languageData/languageTexts';
import { slideInOutRight } from '../animations/slideInOut';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor, NgClass, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [slideInOutRight]
})
export class PortfolioComponent implements AfterViewInit {
  /**
   * Steuert, ob die rechte Überschrift angezeigt wird (für Animation)
   */
  showRightHeadline: boolean = false;

  /**
   * Zugriff auf die übersetzten Texte
   */
  public texts = texts;

  /**
   * Konstruktor der Komponente, stellt Sprach- und Scrollservice bereit
   * @param languageService Service zur Sprachverwaltung
   * @param scrollService Service für Scroll-Beobachtung
   */
  constructor(
    public languageService: LanguageService,
    public scrollService: ScrollService
  ) {}

  /**
   * Referenzanker für Intersection Observer, um Animation beim Sichtbarwerden auszulösen
   */
  @ViewChild('observerAnchor4', { static: true }) anchor!: ElementRef;

  /**
   * Wird nach Initialisierung der View aufgerufen. Setzt Observer auf den definierten Anker.
   * Wenn dieser im Viewport sichtbar wird, startet die Überschrift-Animation und
   * `overflowX` wird vorübergehend ausgeblendet.
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
    setTimeout(() => this.tryStartAnimation(), 400);
    return;
  }
  document.body.style.overflowX = 'hidden';
  this.showRightHeadline = true;
  setTimeout(() => {
    document.body.style.overflowX = 'auto';
  }, 1080); 
}

  /**
   * Liste der Projekte, die im Portfolio angezeigt werden
   */
  projects: {
    imgPath: string;
    link: string;
    linkGit: string;
    description: string;
    descriptionEN: string;
    reverseRow: boolean;
    name: string;
    skills: string;
    commingSoon: boolean;
  }[] = [
    {
      imgPath: "/assets/projects/Pkedex.png",
      link: "https://pokedex.frontendschaz.de/",
      linkGit: "https://github.com/StephensSpace/Pokedex",
      descriptionEN:
        `Based on the PokéAPI a simple library that provides and catalogues pokemon information.
         Project design by myself, no professional template.`,
      description: `Basierend auf der PokéAPI ist dies eine kleine Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.
                    Das Design des Projekts stammt von mir selbst, kein professionelles Template wurde verwendet.`,
      reverseRow: false,
      name: "Pokedex",
      skills: "JavaScript | HTML | CSS | API",
      commingSoon: false
    },
    {
      imgPath: "/assets/projects/PolloLoco.png",
      link: "https://elpolloloco.frontendschaz.de",
      linkGit: "https://github.com/StephensSpace/El-Pollo-Loco",
      descriptionEN:
        `A simple Jump-and-Run game based on an object-oriented approach. 
        Help Pepe to find coins and salsa bottles to fight against the Boss chicken.`,
      description: `Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert.
                    Hilf Pepe, Münzen und Salsaflaschen zu finden, um gegen das Boss-Huhn zu kämpfen.`,
      reverseRow: true,
      name: "El Pollo Loco",
      skills: "JavaScript | HTML | CSS | Canvas based",
      commingSoon: false
    },
    {
      imgPath: "/assets/projects/Join.png",
      link: "https://joinda.frontendschaz.de/welcome.html",
      linkGit: "https://github.com/StephensSpace/JoinDA",
      descriptionEN:
        `Task manager inspired by the Kanban System. 
        Create and organize tasks using drag and drop functions, assign users and categories.`,
      description: `Task-Manager inspiriert vom Kanban-System.
                    Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.`,
      reverseRow: false,
      name: "Join",
      skills: "JavaScript | HTML | CSS",
      commingSoon: false
    }
  ];
}