import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HereIamComponent } from '../here-iam/here-iam.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CommentsComponent } from '../comments/comments.component';
import { KontaktformComponent } from '../kontaktform/kontaktform.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HereIamComponent,
    AboutMeComponent,
    PortfolioComponent,
    CommentsComponent,
    KontaktformComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
 }
