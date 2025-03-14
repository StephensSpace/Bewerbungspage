import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HereIamComponent } from './here-iam/here-iam.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HereIamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
