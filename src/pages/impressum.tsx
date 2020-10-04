import * as React from 'react'
const Layout = require('@layouts/layout').default;

const location = {
    pathname: 'impressum'
};

const Impressum = () => (
    <>
        <Layout location={location}>
            <h1>Impressum</h1>
            <p>Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und
                Offenlegungspflicht
                laut §25 Mediengesetz.</p>
            <p>
                <p>Dominik Dorfstetter</p>
                <p>Pachmüllergasse 22/10, <br/>1120 Wien, <br/>Österreich</p>
                <p>
                    <strong>Tel.:</strong> 0043 670 506 55 15<br/>
                    <strong>E-Mail:</strong> <a href="mailto:dorfstetter@posteo.de">dorfstetter@posteo.de</a>
                </p>
                <p style={{
                    marginTop: '15px'
                }}>Quelle: Erstellt mit dem Impressum Generator von <a
                    href="https://www.adsimple.at/seo-suchmaschinenoptimierung/"
                    title="AdSimple® Suchmaschinenoptimierung"
                    rel="follow noopener noreferrer" target="_blank">AdSimple® SEO</a> in Kooperation mit <a
                    href="https://www.aboutbusiness.at/" target="_blank"
                    rel="follow noopener noreferrer">aboutbusiness.at</a>
                </p>
                <h2 id="eu-streitschlichtung">EU-Streitschlichtung</h2>
                <p>Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten
                    wir Sie über die
                    Online-Streitbeilegungsplattform (OS-Plattform) informieren.<br/>
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der
                    Europäischen Kommission
                    unter <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                             target="_blank"
                             rel="noopener noreferrer">http://ec.europa.eu/odr?tid=121417714</a> zu richten. Die dafür
                    notwendigen
                    Kontaktdaten finden Sie oberhalb in unserem Impressum.</p>
                <p>Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
                    Streitbeilegungsverfahren
                    vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                <h2 id="haftung-fuer-inhalte-dieser-webseite">Haftung für Inhalte dieser Webseite</h2>
                <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle
                    Informationen
                    bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser
                    Webseite übernehmen,
                    speziell für jene die seitens Dritter bereitgestellt wurden.</p>
                <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu
                    kontaktieren, Sie
                    finden die Kontaktdaten im Impressum.</p>
                <h2 id="haftung-links-webseite">Haftung für Links auf dieser Webseite</h2>
                <p>Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind.
                    Haftung für
                    verlinkte Websites besteht laut <a
                        href="https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&Dokumentnummer=NOR40025813&tid=121417714"
                        target="_blank" rel="noopener noreferrer">§ 17 ECG</a> für uns nicht, da wir keine Kenntnis
                    rechtswidriger
                    Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und
                    wir Links sofort
                    entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
                <p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu kontaktieren, Sie
                    finden die
                    Kontaktdaten im Impressum.</p>
                <h2 id="urheberrechtshinweis">Urheberrechtshinweis</h2>
                <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls
                    notwendig, werden wir
                    die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
                <p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu
                    kontaktieren.</p>
                <h2 id="bildernachweis">Bildernachweis</h2>
                <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
                <p>Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:</p>
                <ul>
                    <li>Fotograf Mustermann</li>
                </ul>
                <h1>Datenschutzerklärung</h1>
                <h2>Inhaltsverzeichnis</h2>
                <ul>
                    <li>
                        <a href="#datenschutz">Datenschutz</a>
                    </li>
                    <li>
                        <a href="#rechte-dsgvo">Rechte laut Datenschutzgrundverordnung</a>
                    </li>
                    <li>
                        <a href="#tls-verschluesselung-https">TLS-Verschlüsselung mit https</a>
                    </li>
                    <li>
                        <a href="#openstreetmap-datenschutzerklaerung">OpenStreetMap Datenschutzerklärung</a>
                    </li>
                </ul>
                <h2 id="datenschutz">Datenschutz</h2>
                <p>Wir haben diese Datenschutzerklärung (Fassung 01.01.1970-121417714) verfasst, um Ihnen gemäß der
                    Vorgaben der <a
                        href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&tid=121417714"
                        target="_blank"
                        rel="noopener noreferrer">Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche
                    Informationen wir sammeln,
                    wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite
                    haben.</p>
                <p>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns
                    bei der
                    Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.</p>
                <h2 id="rechte-dsgvo">Rechte laut Datenschutzgrundverordnung</h2>
                <p>Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen <a
                    href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=121417714"
                    target="_blank" rel="noopener noreferrer">Datenschutzgesetzes (DSG)</a> grundsätzlich die folgende
                    Rechte zu:</p>
                <ul>
                    <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
                    <li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
                    <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder
                        Löschung
                        personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
                    </li>
                    <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
                    <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
                    <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich
                        Profiling — beruhenden
                        Entscheidung unterworfen zu werden (Artikel 22 DSGVO)
                    </li>
                </ul>
                <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
                    datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der
                    Aufsichtsbehörde
                    beschweren, welche in Österreich die Datenschutzbehörde ist, deren Webseite Sie unter <a
                        href="https://www.dsb.gv.at/?tid=121417714">https://www.dsb.gv.at/</a> finden.</p>
                <h2 id="tls-verschluesselung-https">TLS-Verschlüsselung mit https</h2>
                <p>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch
                    Technikgestaltung <a
                        href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=121417714"
                        target="_blank"
                        rel="noopener noreferrer">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport
                    Layer Security), einem
                    Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz
                    vertraulicher Daten
                    sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen
                    Schlosssymbol links oben
                    im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.</p>
                <h2 id="openstreetmap-datenschutzerklaerung">OpenStreetMap Datenschutzerklärung</h2>
                <p>Wir haben auf unserer Website Kartenausschnitte des Online-Kartentools „OpenStreetMap“ eingebunden.
                    Dabei handelt es
                    sich um ein sogenanntes Open-Source-Mapping, welches wir über eine API (Schnittstelle) abrufen
                    können. Angeboten wird
                    diese Funktion von OpenStreetMap Foundation, St John’s Innovation Centre, Cowley Road, Cambridge,
                    CB4 0WS, United
                    Kingdom. Durch die Verwendung dieser Kartenfunktion wird Ihre IP-Adresse an OpenStreetMap
                    weitergeleitet. In dieser
                    Datenschutzerklärung erfahren Sie warum wir Funktionen des Tools OpenStreetMap verwenden, wo welche
                    Daten gespeichert
                    werden und wie Sie diese Datenspeicherung verhindern können.</p>
                <h3>Was ist OpenStreetMap?</h3>
                <p>Das Projekt OpenStreetMap wurde 2004 ins Leben gerufen. Ziel des Projekts ist und war es, eine freie
                    Weltkarte zu
                    erschaffen. User sammeln weltweit Daten etwa über Gebäude, Wälder, Flüsse und Straßen. So entstand
                    über die Jahre eine
                    umfangreiche, von Usern selbst erstellte digitale Weltkarte. Selbstverständlich ist die Karte, nicht
                    vollständig, aber
                    in den meisten Regionen mit sehr vielen Daten ausgestattet.</p>
                <h3>Warum verwenden wir OpenStreetMap auf unserer Website?</h3>
                <p>Unsere Website soll Ihnen in erster Linie hilfreich sein. Und das ist sie aus unserer Sicht immer
                    dann, wenn man
                    Information schnell und einfach findet. Da geht es natürlich einerseits um unsere Dienstleistungen
                    und Produkte,
                    andererseits sollen Ihnen auch weitere hilfreiche Informationen zur Verfügung stehen. Deshalb nutzen
                    wir auch den
                    Kartendienst OpenStreetMap. Denn so können wir Ihnen beispielsweise genau zeigen, wie Sie unsere
                    Firma finden. Die
                    Karte zeigt Ihnen den besten Weg zu uns und Ihre Anfahrt wird zum Kinderspiel.</p>
                <h3>Welche Daten werden von OpenStreetMap gespeichert?</h3>
                <p>Wenn Sie eine unserer Webseiten besuchen, die OpenStreetMap anbietet, werden Nutzerdaten an den
                    Dienst übermittelt
                    und dort gespeichert. OpenStreetMap sammelt etwa Informationen über Ihre Interaktionen mit der
                    digitalen Karte, Ihre
                    IP-Adresse, Daten zu Ihrem Browser, Gerätetyp, Betriebssystem und an welchem Tag und zu welcher
                    Uhrzeit Sie den Dienst
                    in Anspruch genommen haben. Dafür wird auch Tracking-Software zur Aufzeichnung von Userinteraktionen
                    verwendet. Das
                    Unternehmen gibt hier in der eigenen Datenschutzerklärung das Analysetool „Piwik“ an.</p>
                <p>Die erhobenen Daten sind in Folge den entsprechenden Arbeitsgruppen der OpenStreetMap Foundation
                    zugänglich. Laut dem
                    Unternehmen werden persönliche Daten nicht an andere Personen oder Firmen weitergegeben, außer dies
                    ist rechtlich
                    notwendig. Der Drittanbieter Piwik speichert zwar Ihre IP-Adresse, allerdings in gekürzter Form.</p>
                <p>Folgendes Cookie kann in Ihrem Browser gesetzt werden, wenn Sie mit OpenStreetMap auf unserer Website
                    interagieren:</p>
                <p>
                    <strong>Name:</strong> _osm_location<br/>
                    <strong>Wert:</strong> 9.63312%7C52.41500%7C17%7CM<br/>
                    <strong>Verwendungszweck:</strong> Das Cookie wird benötigt, um die Inhalte von OpenStreetMap zu
                    entsperren.<br/>
                    <strong>Ablaufdatum:</strong> nach 10 Jahren</p>
                <p>Wenn Sie sich das Vollbild der Karte ansehen wollen, werden Sie auf die OpenStreetMap-Website
                    verlinkt. Dort können
                    unter anderem folgende Cookies in Ihrem Browser gespeichert werden:</p>
                <p>
                    <strong>Name:</strong> _osm_totp_token<br/>
                    <strong>Wert:</strong> 148253121417714-2<br/>
                    <strong>Verwendungszweck:</strong> Dieses Cookie wird benutzt, um die Bedienung des
                    Kartenausschnitts zu
                    gewährleisten.<br/>
                    <strong>Ablaufdatum:</strong> nach einer Stunde</p>
                <p>
                    <strong>Name:</strong> _osm_session<br/>
                    <strong>Wert:</strong> 1d9bfa122e0259d5f6db4cb8ef653a1c<br/>
                    <strong>Verwendungszweck:</strong> Mit Hilfe des Cookies können Sitzungsinformationen (also
                    Userverhalten) gespeichert
                    werden.<br/>
                    <strong>Ablaufdatum:</strong> nach Sitzungsende</p>
                <p>
                    <strong>Name:</strong> _pk_id.1.cf09<br/>
                    <strong>Wert:</strong> 4a5.1593684142.2.1593688396.1593688396121417714-9<br/>
                    <strong>Verwendungszweck:</strong> Dieses Cookie wird von Piwik gesetzt, um Userdaten wie etwa das
                    Klickverhalten zu
                    speichern bzw. zu messen.<br/>
                    <strong>Ablaufdatum:</strong> nach einem Jahr</p>
                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Die API-Server, die Datenbanken und die Server von Hilfsdiensten befinden sich derzeit im Vereinten
                    Königreich
                    (Großbritannien und Nordirland) und in den Niederlanden. Ihre IP-Adresse und Userinformationen, die
                    in gekürzter Form
                    durch das Webanalysetool Piwik gespeichert werden, werden nach 180 Tagen wieder gelöscht.</p>
                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                <p>Sie haben jederzeit das Recht auf Ihre personenbezogenen Daten zuzugreifen und Einspruch gegen die
                    Nutzung und
                    Verarbeitung zu erheben. Cookies, die von OpenStreetMap möglicherweise gesetzt werden, können Sie in
                    Ihrem Browser
                    jederzeit verwalten, löschen oder deaktivieren. Dadurch wird allerdings der Dienst nicht mehr im
                    vollen Ausmaß
                    funktionieren. Bei jedem Browser funktioniert die Verwaltung, Löschung oder Deaktivierung von
                    Cookies etwas anders. Im
                    Folgenden finden Sie Links zu den Anleitungen der bekanntesten Browser:</p>
                <p>
                    <a href="https://support.google.com/chrome/answer/95647?tid=121417714" target="_blank"
                       rel="noopener noreferrer">Chrome:
                        Cookies in Chrome löschen, aktivieren und verwalten</a>
                </p>
                <p>
                    <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=121417714" target="_blank"
                       rel="noopener noreferrer">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                </p>
                <p>
                    <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=121417714"
                       target="_blank"
                       rel="noopener noreferrer">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem
                        Computer abgelegt
                        haben</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=121417714"
                       target="_blank" rel="noopener noreferrer">Internet Explorer: Löschen und Verwalten von
                        Cookies</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=121417714"
                       target="_blank"
                       rel="noopener noreferrer">Microsoft Edge: Löschen und Verwalten von Cookies</a>
                </p>
                <p>Wenn Sie mehr über die Datenverarbeitung durch OpenStreetMap erfahren wollen, empfehlen wir Ihnen die
                    Datenschutzerklärung des Unternehmens unter <a
                        href="https://wiki.osmfoundation.org/wiki/Privacy_Policy?tid=121417714"
                        target="_blank"
                        rel="noopener noreferrer">https://wiki.osmfoundation.org/wiki/Privacy_Policy.</a>
                </p>
            </p>
        </Layout>
    </>
)

export default Impressum
