import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-comments',
  imports: [NgFor, NgIf],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  constructor(public languageService: LanguageService) {}
  currentIndex = 0;
  comments: {
    img: string,
    commentDE: string,
    commentEN: string,
    name: string,
    job: string
  }[] = [
      {
        img: "/assets/People/Andrea.png",
        commentDE: `Stephen hat mir als Web Designerin mit kreativen und lösungsorientierten 
      Ideen bei meinen Projekten weitergeholfen. 
      Seine pragmatische Herangehensweise und Geduld haben mir bereits des öfteren neue Lösungsansätze
      aufgezeigt.`,
        commentEN: `Stephen has always helped me with creative and solution-oriented ideas 
      for my projects as a web designer. 
      His pragmatic approach and patience have always shown me new ways of solving issues.`,
        name: "Andrea Z.",
        job: "Web Designerin"
      },
      {
        img: "/assets/People/Anthony.png",
        commentDE: `Stephen hilft nicht nur bei technischen Herausforderungen, 
        sondern erklärt auch komplexe Dinge auf eine klare und verständliche Weise.
         Seine Geduld und Hilfsbereitschaft haben mir in unserem Team immer sehr weitergeholfen.`,
        commentEN: `Stephen not only helps with technical challenges but also explains complex 
        concepts in a clear and understandable way. His patience and willingness to help 
        have always been a great support to me within our team.`,
        name: "Anthony P.",
        job: "Frontend, Team Partner"
      },
      {
        img: "/assets/People/Niclas.png",
        commentDE: `Stephen hat ein gutes Auge für Details und hat uns sehr dabei geholfen, 
        schon in der Planungsphase alle relevanten Aspekte zu berücksichtigen, um das Design 
        benutzerfreundlich und funktional zu gestalten.  
        Es war immer eine Freude, mit ihm zusammenzuarbeiten.`,
        commentEN: `Stephen has a good eye for detail and has been a great help in considering all relevant aspects during the planning 
        phase to make the design user-friendly and functional. 
        It’s always been a pleasure working with him.`,
        name: "Niclas H.",
        job: "Frontend, Team Partner"
      }
    ]

  showNext() {
    if (this.currentIndex < this.comments.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  showPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.comments.length - 1
    }
  }
}
