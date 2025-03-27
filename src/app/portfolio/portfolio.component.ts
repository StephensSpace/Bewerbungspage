import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor, NgStyle, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: {
    imgPath: string;
    link: string;
    linkGit: string;
    description: string;
    reverseRow: boolean;
    name: string;
    skills: string;
    commingSoon: boolean
  }[] = [
      {
        imgPath: "/assets/projects/Pkedex.svg",
        link: "https://pokedex.frontendschaz.de/",
        linkGit: "https://github.com/StephensSpace/Pokedex",
        description:
          `Based on the PokéAPI a simple library that provides and catalogues pokemon information.
           Project design by myself, no professional template.`,
        reverseRow: false,
        name: "Pokedex",
        skills: "JavaScript | HTML | CSS | API",
        commingSoon: false
      },
      {
        imgPath: "/assets/projects/PolloLoco.svg",
        link: "https://elpolloloco.frontendschaz.de",
        linkGit: "https://github.com/StephensSpace/El-Pollo-Loco",
        description:
          `A simple Jump-and-Run game based on an object-oriented approach. 
        Help Pepe to find coins and salsa bottles to fight against the Boss chicken.`,
        reverseRow: true,
        name: "El Pollo Loco",
        skills: "JavaScript | HTML | CSS |  Canvas based ",
        commingSoon: false
      },
      {
        imgPath: "/assets/projects/Join.svg",
        link: "https://joinda.frontendschaz.de/welcome.html",
        linkGit: "https://github.com/StephensSpace/JoinDA",
        description:
          `Task manager inspired by the Kanban System. 
          Create and organize tasks using drag and drop functions, assign users and categories. `,
        reverseRow: false,
        name: "Join",
        skills: "JavaScript | HTML | CSS ",
        commingSoon: false
      },
      {
        imgPath: "/assets/projects/Dabubble.svg",
        link: "",
        linkGit: "",
        description:
          `Comming soon, project starts April 2025. This App is a Slack Clone App. 
          It revolutionizes team communication and collaboration with its intuitive interface,
           real-time messaging, and robust channel organization.`,
        reverseRow: true,
        name: "DA Bubble",
        skills: "Angular | Typescript | Firebase",
        commingSoon: true
      }
    ];
}

