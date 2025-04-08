import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HomeComponent } from './home/home.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Hauptseite
  { path: 'legal-notice', component: LegalNoticeComponent }, // Impressum
  { path: 'datenschutz', component: DatenschutzComponent }, 
];

