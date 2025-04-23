import { CommonModule, NgClass, NgFor,  } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { texts } from '../languageData/languageTexts';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor, NgClass, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public texts = texts;
  constructor(public languageService: LanguageService) { }

  projects: {
    imgPath: string;
    link: string;
    linkGit: string;
    description: string;
    descriptionEN: string;
    reverseRow: boolean;
    name: string;
    skills: string;
    commingSoon: boolean
  }[] = [
      {
        imgPath: "/assets/projects/Pkedex.svg",
        link: "https://pokedex.frontendschaz.de/",
        linkGit: "https://github.com/StephensSpace/Pokedex",
        descriptionEN:
          `Based on the PokéAPI a simple library that provides and catalogues pokemon information.
           Project design by myself, no professional template.`,
        description: `Basierend auf der PokéAPI ist dies eine kleine Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.
                      Das Design des Projekts stammt von mir selbst, 
                      kein professionelles Template wurde verwendet.`,
        reverseRow: false,
        name: "Pokedex",
        skills: "JavaScript | HTML | CSS | API",
        commingSoon: false
      },
      {
        imgPath: "/assets/projects/PolloLoco.svg",
        link: "https://elpolloloco.frontendschaz.de",
        linkGit: "https://github.com/StephensSpace/El-Pollo-Loco",
        descriptionEN:
          `A simple Jump-and-Run game based on an object-oriented approach. 
          Help Pepe to find coins and salsa bottles to fight against the Boss chicken.`,
        description: `Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert.
                      Hilf Pepe, Münzen und Salsaflaschen zu finden, um gegen das Boss-Huhn zu kämpfen.`,
        reverseRow: true,
        name: "El Pollo Loco",
        skills: "JavaScript | HTML | CSS |  Canvas based ",
        commingSoon: false
      },
      {
        imgPath: "/assets/projects/Join.svg",
        link: "https://joinda.frontendschaz.de/welcome.html",
        linkGit: "https://github.com/StephensSpace/JoinDA",
        descriptionEN:
          `Task manager inspired by the Kanban System. 
          Create and organize tasks using drag and drop functions, assign users and categories. `,
        description: `Task-Manager inspiriert vom Kanban-System.
                      Erstelle und organisiere Aufgaben per Drag-and-Drop, 
                      weise Benutzer und Kategorien zu.`,
        reverseRow: false,
        name: "Join",
        skills: "JavaScript | HTML | CSS ",
        commingSoon: false
      },
      {
        imgPath: "/assets/projects/Dabubble.svg",
        link: "",
        linkGit: "",
        descriptionEN:
          `Comming soon, project starts April 2025. This App is a Slack Clone App. 
          It revolutionizes team communication and collaboration with its intuitive interface,
           real-time messaging, and robust channel organization.`,
        description: `Demnächst verfügbar – Projektstart ist im April 2025.
                      Diese App ist ein Slack-Clone, der die Teamkommunikation 
                      und Zusammenarbeit durch seine intuitive Benutzeroberfläche, 
                      Echtzeitnachrichten und strukturierte Kanalorganisation revolutioniert.`,
        reverseRow: true,
        name: "DA Bubble",
        skills: "Angular | Typescript | Firebase",
        commingSoon: true
      }
    ];
}

