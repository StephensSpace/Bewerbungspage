import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';  // Verwende provideRouter
import { Routes } from '@angular/router';  // Importiere Routes
import { HomeComponent } from './app/home/home.component';
import { LegalNoticeComponent } from './app/legal-notice/legal-notice.component';
import { DatenschutzComponent } from './app/datenschutz/datenschutz.component';

// Definiere deine Routen hier
const routes: Routes = [
  { path: '', component: HomeComponent }, // Hauptseite
  { path: 'legal-notice', component: LegalNoticeComponent }, // Impressum
  { path: 'datenschutz', component: DatenschutzComponent }, // Datenschutz
];

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,  // Deine bestehenden Provider
    provideRouter(routes),  // RouterProvider mit den Routen hinzufügen
  ],
})
  .catch((err) => console.error(err));