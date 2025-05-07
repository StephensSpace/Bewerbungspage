import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { LanguageService } from '../services/language.service';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, CommonModule],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
    constructor(public languageService: LanguageService) { }
    public text: {
        de: string,
        en: string
    } = {
            de: `<h1>Impressum</h1>
    <p>Angaben gemäß § 5 DDG</p>
    <p>Stephen Schaz<br>
        <br>
        Max-Planck-Weg 10<br>
        88605 Messkirch <br>
    </p>
    <p> <strong>Vertreten durch: </strong><br>
        Stephen Schaz<br>
    </p>
    <p><strong>Kontakt:</strong> <br>
        Telefon: 0176-46070067<br>
        E-Mail: <a href='mailto:stephenschaz90@gmail.com'>stephenschaz90&#64;gmail.com</a><br></p>
    <p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Links</strong><br><br>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
        Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
        dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
        Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
        Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies,
        soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
        Dritte weitergegeben. <br>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich. <br>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
        Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.<br>
    </p><br>
    <p>Impressum von <a href="https://impressum-generator.de" rel="dofollow">Impressum-Generator.de</a>. Powered by <a
        href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Franziska Hasselbach, Bonn</a>.</p>`,
            en: `<h1>Imprint</h1>
<p>Details according to § 5 DDG</p>
<p>Stephen Schaz<br>
    <br>
    Max-Planck-Weg 10<br>
    88605 Messkirch <br>
</p>
<p> <strong>Represented by: </strong><br>
    Stephen Schaz<br>
</p>
<p><strong>Contact:</strong> <br>
    Phone: 0176-46070067<br>
    E-Mail: <a href='mailto:stephenschaz90@gmail.com'>stephenschaz90&#64;gmail.com</a><br></p>
<p><strong>Disclaimer: </strong><br><br><strong>Liability for Links</strong><br><br>
    Our offer contains links to external third-party websites, the contents of which we have no influence on. Therefore, 
    we cannot assume any liability for these foreign contents. The respective provider or operator of the pages is always 
    responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the 
    time of linking. Illegal content was not identifiable at the time of linking. However, a permanent content control of
     the linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of any legal 
     violations, we will immediately remove such links.<br><br><strong>Copyright</strong><br><br>
    The contents and works created by the site operators on these pages are subject to German copyright law. Reproduction, 
    processing, distribution, and any kind of utilization outside the limits of copyright law require the written consent 
    of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial 
    use. As far as the contents of this page are not created by the operator, the copyrights of third parties are respected. 
    In particular, third-party content is marked as such. Should you become aware of a copyright infringement, we ask you to 
    point it out. Upon becoming aware of legal violations, we will immediately remove such content.<br><br><strong>Data Protection</strong><br><br>
    The use of our website is generally possible without providing personal data. As far as personal data 
    (e.g., name, address, or e-mail addresses) is collected on our pages, this is done, as far as possible, always on a
     voluntary basis. This data will not be passed on to third parties without your express consent. <br>
    We point out that data transmission over the internet (e.g., communication via e-mail) may have security gaps. 
    A complete protection of the data from access by third parties is not possible. <br>
    The use of contact data published as part of the legal notice obligation by third parties for the purpose of 
    sending unsolicited advertising and information materials is hereby expressly contradicted. The operators of 
    the pages reserve the right to take legal action in the event of the unsolicited sending of advertising information, 
    such as through spam emails.<br>
</p><br>
<p>Imprint from <a href="https://impressum-generator.de" rel="dofollow">Impressum-Generator.de</a>. Powered by <a
    href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Franziska Hasselbach, Bonn</a>.</p>`
        }
}
