import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

/**
 * Die Footer-Komponente stellt den Footer-Bereich der Seite dar.
 * Sie ermöglicht das Scrollen zu bestimmten Fragmenten auf der Seite.
 */
@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  /**
   * Konstruktor der Footer-Komponente
   * @param scrollService Der ScrollService zum Scrollen zu Fragmenten.
   */
  constructor(
    public scrollService: ScrollService,
  ) {}
}
