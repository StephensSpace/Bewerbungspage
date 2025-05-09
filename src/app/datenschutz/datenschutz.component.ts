import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { LanguageService } from '../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {
  constructor(public languageService: LanguageService) { }

  /**
   Objekt fü das verwalten der Texte des Datenschutzes auf deutsch 
   und englisch
   */
  public datenschutz: {
    de: string,
    en: string
  } = {
    de: `<h1>Datenschutzerklärung zur Nutzung des Kontaktformulars</h1>

    <p>Mit dem Absenden des Kontaktformulars erklärst du dich damit einverstanden, dass die von dir eingegebenen Daten
        (wie Name, E-Mail-Adresse und Nachricht) zum Zweck der Beantwortung deiner Anfrage und der Kontaktaufnahme durch
        uns verarbeitet und gespeichert werden. Diese Daten werden ausschließlich zum Zweck der Kommunikation und
        Bearbeitung deiner Anfrage verwendet und nicht an Dritte weitergegeben.</p>

    <h3>1. Verantwortlicher</h3>
    <p>Verantwortlich für die Datenverarbeitung im Zusammenhang mit dem Kontaktformular ist:</p>
    <ul>
        <li>Name: Stephen Schaz</li>
        <li>E-Mail-Adresse: <a href="mailto:stephenschaz90@gmail.com">stephenschaz90&#64;gmail.com</a></li>
        <li>Telefonnummer: 017646070067</li>
    </ul>

    <h3>2. Erhebung und Verarbeitung personenbezogener Daten</h3>
    <p>Die folgenden personenbezogenen Daten werden erfasst und verarbeitet, wenn du das Kontaktformular ausfüllst:</p>
    <ul>
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Nachricht/Anfrage</li>
    </ul>

    <h3>3. Zwecke der Datenverarbeitung</h3>
    <p>Die von dir übermittelten Daten werden ausschließlich für die folgenden Zwecke verwendet:</p>
    <ul>
        <li>Bearbeitung und Beantwortung deiner Anfrage.</li>
        <li>Kommunikation mit dir im Zusammenhang mit dem Kontaktformular.</li>
    </ul>

    <h3>4. Rechtsgrundlage der Verarbeitung</h3>
    <p>Die Verarbeitung deiner personenbezogenen Daten erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1
        lit. a DSGVO. Durch das Absenden des Formulars stimmst du der Verarbeitung deiner Daten zu.</p>

    <h3>5. Datenweitergabe</h3>
    <p>Die von dir übermittelten Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist für die Bearbeitung
        deiner Anfrage erforderlich (z. B. Weiterleitung an einen externen Dienstleister, falls notwendig).</p>

    <h3>6. Datenaufbewahrung</h3>
    <p>Die von dir übermittelten Daten werden nur so lange aufbewahrt, wie es zur Beantwortung deiner Anfrage notwendig
        ist. Sobald die Anfrage bearbeitet wurde, werden die Daten gelöscht, es sei denn, eine längere Aufbewahrung ist
        gesetzlich erforderlich.</p>

    <h3>7. Deine Rechte</h3>
    <p>Du hast das Recht:</p>
    <ul>
        <li>Auskunft über die von dir gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO).</li>
        <li>Die Berichtigung oder Löschung deiner Daten zu verlangen (Art. 16 und 17 DSGVO).</li>
        <li>Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO).</li>
        <li>Widerspruch gegen die Verarbeitung deiner Daten einzulegen (Art. 21 DSGVO).</li>
    </ul>

    <h3>8. Widerruf der Einwilligung</h3>
    <p>Du kannst deine Einwilligung zur Verarbeitung deiner personenbezogenen Daten jederzeit widerrufen. Der Widerruf
        erfolgt durch eine einfache Nachricht an <a href="mailto:stephenschaz90@gmail.com">stephenschaz90&#64;gmail.com</a>.
        Der Widerruf hat jedoch keinen Einfluss auf die Rechtmäßigkeit der Verarbeitung, die bis zum Widerruf
        stattgefunden hat.</p>

    <h3>9. Beschwerderecht</h3>
    <p>Du hast das Recht, bei der zuständigen Aufsichtsbehörde Beschwerde einzulegen, wenn du der Ansicht bist, dass die
        Verarbeitung deiner personenbezogenen Daten gegen die DSGVO verstößt.</p>

    <h3>10. Sicherheit der Datenübertragung</h3>
    <p>Die Übertragung deiner Daten über das Kontaktformular erfolgt über eine verschlüsselte Verbindung (SSL/TLS), um
        die Sicherheit deiner Daten zu gewährleisten.</p>

    <h3>11. Kontakt</h3>
    <p>Falls du Fragen zum Datenschutz hast oder deine Rechte ausüben möchtest, kannst du uns jederzeit unter <a
            href="mailto:stephenschaz90@gmail.com">stephenschaz90&#64;gmail.com</a> kontaktieren.</p>
</div>`,


    en: `<h1>Privacy Policy for the Use of the Contact Form</h1>

    <p>
        By submitting the contact form, you agree that the data you enter 
        (such as your name, email address, and message) will be processed 
        and stored for the purpose of responding to your inquiry and contacting you. 
        This data will only be used for communication and handling your request 
        and will not be shared with third parties.
    </p>

<h3>1. Controller</h3>
    <p>
        The person responsible for data processing in connection with the contact form is:
    </p>
    <ul>
        <li>Name: Stephen Schaz</li>
        <li>Email address: <a href="mailto:stephenschaz90@gmail.com">stephenschaz90&#64;gmail.com</a></li>
        <li>Phone number: 017646070067</li>
    </ul>

<h3>2. Collection and Processing of Personal Data</h3>
    <p>
        The following personal data will be collected and processed 
        when you fill out the contact form:
    </p>
    <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Message/inquiry</li>
    </ul>

<h3>3. Purpose of Data Processing</h3>
    <p>
        The data you provide will only be used for the following purposes:
    </p>
    <ul>
        <li>Handling and responding to your inquiry.</li>
        <li>Communicating with you in connection with the contact form.</li>
    </ul>

<h3>4. Legal Basis for Processing</h3>
    <p>
        The processing of your personal data is based on your consent 
        pursuant to Art. 6(1)(a) GDPR. 
        By submitting the form, you consent to the processing of your data.
    </p>

<h3>5. Data Disclosure</h3>
    <p>
        Your submitted data will not be shared with third parties unless 
        it is necessary to process your request 
        (e.g., forwarding to an external service provider, if needed).
    </p>

<h3>6. Data Retention</h3>
    <p>
        Your submitted data will be retained only as long as necessary 
        to respond to your inquiry. 
        Once your request has been processed, the data will be deleted 
        unless longer retention is required by law.
    </p>

<h3>7. Your Rights</h3>
    <p>You have the right to:</p>
    <ul>
        <li>Access the personal data stored about you (Art. 15 GDPR).</li>
        <li>Request correction or deletion of your data (Art. 16 and 17 GDPR).</li>
        <li>Request restriction of processing (Art. 18 GDPR).</li>
        <li>Object to the processing of your data (Art. 21 GDPR).</li>
    </ul>

<h3>8. Withdrawal of Consent</h3>
    <p>
        You can withdraw your consent to the processing of your personal data at any time. 
        The withdrawal can be made by simply sending a message to 
        <a href="mailto:stephenschaz90@gmail.com">stephenschaz90&#64;gmail.com</a>. 
        The withdrawal does not affect the legality of the processing 
        carried out before the withdrawal.
    </p>

<h3>9. Right to Lodge a Complaint</h3>
    <p>
        You have the right to lodge a complaint with the competent supervisory authority 
        if you believe that the processing of your personal data violates the GDPR.
    </p>

<h3>10. Data Transmission Security</h3>
    <p>
        The transmission of your data via the contact form is secured 
        with encrypted connections (SSL/TLS) to ensure the safety of your data.
    </p>

<h3>11. Contact</h3>
    <p>
        If you have any questions about data protection or wish to exercise your rights, 
        you can contact us at any time at 
        <a href="mailto:stephenschaz90@gmail.com">stephenschaz90&#64;gmail.com</a>.
    </p>`
  }
}
