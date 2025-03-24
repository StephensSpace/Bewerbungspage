import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillset = [
    {
      img: '/assets/skills/skill0.svg',
      text: "HTML"
    },
    {
      img: '/assets/skills/skill1.svg',
      text: "CSS"
    },
    {
      img: '/assets/skills/skill2.svg',
      text: "JavaScript",
      margin: -20
    },
    {
      img: '/assets/skills/skill3.svg',
      text: "TypeScript",
      margin: -20
    },
    {
      img: '/assets/skills/skill4.svg',
      text: "Angular"
    },
    {
      img: '/assets/skills/skill5.svg',
      text: "Firebase"
    },
    {
      img: '/assets/skills/skill6.svg',
      text: "Git"
    },
    {
      img: '/assets/skills/skill7.svg',
      text: "Rest Api"
    },
    {
      img: '/assets/skills/skill8.svg',
      text: "Scrum"
    },
    {
      img: '/assets/skills/skill9.svg',
      text: "Material Design"
    },
    {
      img: '/assets/skills/skill10.png',
      text: ""
    }
  ];
  private hoverTimeout: any;
  private leaveTimeout: any;
  hoverLocked: boolean = false;
  hover: boolean = false; // Variable für den Hover-Status

  onMouseOver(last: boolean): void {
    if (last && !this.hoverLocked) {
      this.hoverLocked = true; // Sperrt weiteren MouseOver
      this.hoverTimeout = setTimeout(() => {
        this.hover = true;
      }, 100); 
    }
  }
  
  onMouseLeave(): void {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
    this.leaveTimeout = setTimeout(() => {
      this.hover = false;
      this.hoverLocked = false; // Entsperrt MouseOver nach dem Verlassen
    }, 200); 
  }

  onHover(isLast: boolean) {
    this.hover = isLast; // Setze hover auf true, wenn 'last' ist
  }
}
