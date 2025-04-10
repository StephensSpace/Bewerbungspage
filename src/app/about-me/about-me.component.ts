import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { LanguageService } from '../services/language.service';
import { CommonModule } from '@angular/common';
import { texts } from '../languageData/languageTexts';

@Component({
  selector: 'app-about-me',
  imports: [SkillsComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  public texts = texts;
  constructor(public languageService: LanguageService) {}
}
