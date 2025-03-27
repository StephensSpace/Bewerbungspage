import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HereIamComponent } from './here-iam/here-iam.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommentsComponent } from './comments/comments.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,
    HereIamComponent, AboutMeComponent,
    PortfolioComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
