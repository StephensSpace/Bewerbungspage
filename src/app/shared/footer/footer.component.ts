import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';


@Component({
  selector: 'app-footer',
  imports: [RouterModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(
      public scrollService: ScrollService,
      ) {}

}
