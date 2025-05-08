import { Component,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { LanguageService } from '../services/language.service';
import { CommonModule } from '@angular/common';
import { texts } from '../languageData/languageTexts';
import { slideInOutRight, slideInOutLeft } from '../animations/slideInOut';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-me',
  imports: [SkillsComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [slideInOutRight, slideInOutLeft]
})
export class AboutMeComponent implements AfterViewInit {

  public texts = texts;
  showRightPic: boolean = false;
  showLeftText:boolean = false;
  constructor(public languageService: LanguageService, public scrollService: ScrollService) {}
  
  @ViewChild('observerAnchor3', { static: true }) anchor!: ElementRef;

  ngAfterViewInit(): void {
    // Scroll-Tracking
    if (this.anchor?.nativeElement) {
      this.scrollService.observeElement(this.anchor.nativeElement, () => {
        // Setze overflowX auf hidden, wenn die Animation startet
        document.body.style.overflowX = 'hidden';
        this.showRightPic = true;
        this.showLeftText = true;
        // Nach 1 Sekunde overflowX wieder auf auto setzen
        setTimeout(() => {
          document.body.style.overflowX = 'auto';
        }, 1500);
      });
    }
  }

}
