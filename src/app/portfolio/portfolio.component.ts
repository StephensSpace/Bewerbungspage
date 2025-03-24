import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor, NgStyle],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: { imgPath: string; link: string; linkGit: string; description: string; reverseRow: boolean }[] = [
    {
        imgPath: "/assets/projects/Pkedex.svg",
        link: "",
        linkGit: "https://github.com/StephensSpace/Pokedex",
        description: "",
        reverseRow: false
    }
];
}
