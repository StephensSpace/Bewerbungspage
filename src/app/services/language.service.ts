import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    public isGerman = false; // Standard: Englisch

    constructor() { }

    toggleLanguage() {
        this.isGerman = !this.isGerman;
    }

}