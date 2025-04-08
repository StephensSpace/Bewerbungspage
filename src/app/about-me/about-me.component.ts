import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me',
  imports: [SkillsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(public languageService: LanguageService) {}
}
