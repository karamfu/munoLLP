document.addEventListener('DOMContentLoaded', function () {
    var selectedLanguage = getSelectedLanguage();
    document.getElementById('language').value = selectedLanguage;
    updateContent(selectedLanguage);
  });

document.addEventListener('DOMContentLoaded', function () {
    var selectedLanguage = getSelectedLanguage();
    document.getElementById('language').value = selectedLanguage;
    updateContent(selectedLanguage);
});

document.getElementById('language').addEventListener('change', function () {
    var selectedLanguage = this.value;
    setSelectedLanguage(selectedLanguage);
    updateContent(selectedLanguage);
});
  
  function updateContent(language) {
    switch (language) {
        case 'French':
            // document.querySelector('#home').textContent = 'Accueil';
            document.querySelector('#about').textContent = 'À Propos';
            document.querySelector('#download').textContent = 'Commencer';
            document.querySelector('#faq').textContent = 'FAQ';
            // document.querySelector('#login').textContent = 'Connexion';
            document.querySelector('.main-text').textContent = 'À propos de MUNO';
            document.querySelector('title').innerHTML = 'À propos - MUNO';
            document.querySelector('.support h2').innerHTML = 'Code de conduite';
            document.querySelector('.support p').innerHTML = "Le projet MUNO est une communauté internationale ouverte à tous sans discrimination. Nous voulons que cette communauté soit un endroit sûr et accueillant tant pour les nouveaux arrivants que pour les membres actuels. Chacun doit se sentir à l'aise et accepté, quels que soient son parcours personnel et son affiliation au projet MUNO.";
            document.querySelector('.support1 h2').innerHTML = 'Politique de confidentialité';
            document.querySelector('.support1 p').innerHTML = `MUNO exploite le site web MUNO.com, qui propose le SERVICE.<br></br>

            Cette page est utilisée pour informer les visiteurs du site web sur nos politiques en matière de collecte, d'utilisation et de divulgation d'informations personnelles si quelqu'un décide d'utiliser notre service, le site web MUNO.<br></br>
            
            Si vous choisissez d'utiliser notre service, vous acceptez la collecte et l'utilisation d'informations conformément à cette politique. Les informations personnelles que nous collectons sont utilisées pour fournir et améliorer le service. Nous n'utiliserons ni ne partagerons vos informations avec personne, sauf tel que décrit dans cette politique de confidentialité.<br></br>
            
            Les termes utilisés dans cette politique de confidentialité ont la même signification que dans nos conditions d'utilisation, accessibles à l'adresse file:///C:/Users/kfuta/Downloads/muno_main.html, sauf indication contraire dans cette politique de confidentialité.<br></br>
            Collecte et utilisation des informations<br></br>
            
            Pour une meilleure expérience lors de l'utilisation de notre service, nous pouvons vous demander de nous fournir certaines informations personnelles identifiables, notamment, mais sans s'y limiter, votre nom, numéro de téléphone et adresse postale. Les informations que nous collectons seront utilisées pour vous contacter ou vous identifier.<br></br>
            Données de journal<br></br>
            
            Les cookies sont des fichiers contenant une petite quantité de données qui sont couramment utilisées comme identifiant unique anonyme. Ils sont envoyés à votre navigateur à partir du site web que vous visitez et sont stockés sur le disque dur de votre ordinateur.<br></br>
            
            Notre site web utilise ces "cookies" pour collecter des informations et améliorer notre service. Vous avez la possibilité d'accepter ou de refuser ces cookies et de savoir quand un cookie est envoyé à votre ordinateur. Si vous choisissez de refuser nos cookies, vous risquez de ne pas pouvoir utiliser certaines parties de notre service.<br></br>
            Prestataires de services<br></br>
            
            Nous pouvons faire appel à des entreprises et à des individus tiers pour les raisons suivantes:<br></br>
            
                Faciliter notre service;<br></br>
                Fournir le service en notre nom;<br></br>
                Effectuer des services liés au service; ou<br></br>
                Nous aider à analyser la manière dont notre service est utilisé.<br></br>
            
            Nous tenons à informer les utilisateurs de notre service que ces tiers ont accès à vos informations personnelles. La raison en est d'effectuer les tâches qui leur sont assignées en notre nom. Cependant, ils sont tenus de ne pas divulguer ni d'utiliser les informations à d'autres fins.<br></br>
            Sécurité<br></br>
            
            Nous apprécions la confiance que vous nous accordez en nous fournissant vos informations personnelles, c'est pourquoi nous nous efforçons d'utiliser des moyens commercialement acceptables pour les protéger. Cependant, rappelez-vous qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est à 100 % sécurisée et fiable, et nous ne pouvons garantir une sécurité absolue.<br></br>
            Liens vers d'autres sites<br></br>
            
            Notre service peut contenir des liens vers d'autres sites. Si vous cliquez sur un lien tiers, vous serez redirigé vers ce site. Notez que ces sites externes ne sont pas exploités par nous. Par conséquent, nous vous conseillons vivement de consulter la politique de confidentialité de ces sites web. Nous n'avons aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques de ces sites ou services tiers.<br></br>
            
            Confidentialité des enfants<br></br>
            
            Nos services ne s'adressent à personne de moins de 13 ans. Nous ne collectons sciemment aucune information personnelle identifiable auprès des enfants de moins de 13 ans. Si nous découvrons qu'un enfant de moins de 13 ans nous a fourni des informations personnelles, nous les supprimons immédiatement de nos serveurs. Si vous êtes parent ou tuteur et que vous êtes conscient que votre enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures nécessaires.<br></br>
            Modifications de cette politique de confidentialité<br></br>
            
            Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Par conséquent, nous vous conseillons de consulter cette page périodiquement pour connaître les changements éventuels. Nous vous informerons de toute modification en publiant la nouvelle politique de confidentialité sur cette page. Ces changements sont effectifs immédiatement après leur publication sur cette page.<br></br>
            
            Notre politique de confidentialité a été créée avec l'aide du modèle de politique de confidentialité.<br></br>
            Contactez-nous<br></br>
            
            Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, n'hésitez pas à nous contacter.`;
            document.querySelector('.support2 h2').innerHTML = 'Assistance et contact';
            document.querySelector('.support2 p').innerHTML = `Si vous rencontrez des difficultés pour comprendre ou naviguer dans MUNO ou si vous avez besoin d'aide, veuillez d'abord utiliser les différents canaux communautaires. Les développeurs de MUNO sont occupés à améliorer MUNO, ils ne peuvent donc pas toujours répondre aux questions. Ils se feront toutefois un plaisir de vous aider si vous ne parvenez pas à obtenir de réponse par les moyens conventionnels.`;

            
  
            break;
        case 'Spanish':
            // document.querySelector('#home').textContent = 'Inicio';
            document.querySelector('#about').textContent = 'Acerca De';
            document.querySelector('#download').textContent = 'Comenzar';
            document.querySelector('#faq').textContent = 'FAQ';
            // document.querySelector('#login').textContent = 'Acceso';
            document.querySelector('.main-text').textContent = 'Acerca de MUNO';  
            document.querySelector('title').innerHTML = 'Acerca de - MUNO';
            document.querySelector('.support h2').innerHTML = 'Código de conducta';
            document.querySelector('.support p').innerHTML = 'El proyecto MUNO es una comunidad internacional abierta a todos sin discriminación. Queremos que esta comunidad sea un lugar seguro y acogedor tanto para los recién llegados como para los miembros actuales. Todo el mundo debería sentirse cómodo y aceptado independientemente de sus antecedentes personales y su afiliación al proyecto MUNO.';
            document.querySelector('.support1 h2').innerHTML = 'Política de privacidad';
            document.querySelector('.support1 p').innerHTML = `MUNO opera el sitio web MUNO.com, que proporciona el SERVICIO.<br></br>

            Esta página se utiliza para informar a los visitantes del sitio web sobre nuestras políticas con respecto a la recopilación, uso y divulgación de Información Personal en caso de que alguien decida utilizar nuestro Servicio, el sitio web de MUNO.<br></br>
            
            Si decides utilizar nuestro Servicio, aceptas la recopilación y el uso de información en relación con esta política. La Información Personal que recopilamos se utiliza para proporcionar y mejorar el Servicio. No utilizaremos ni compartiremos tu información con nadie, excepto según se describe en esta Política de Privacidad.<br></br>
            
            Los términos utilizados en esta Política de Privacidad tienen el mismo significado que en nuestros Términos y Condiciones, accesibles en file:///C:/Users/kfuta/Downloads/muno_main.html, a menos que se defina de otra manera en esta Política de Privacidad.<br></br>
            Recopilación y Uso de Información<br></br>
            
            Para obtener una mejor experiencia al utilizar nuestro Servicio, es posible que te solicitemos que nos proporciones cierta información personal identificable, incluidos, entre otros, tu nombre, número de teléfono y dirección postal. La información que recopilamos se utilizará para contactarte o identificarte.<br></br>
            Datos de Registro<br></br>
            
            Queremos informarte que cada vez que visitas nuestro Servicio, recopilamos información que tu navegador nos envía, denominada Datos de Registro. Estos Datos de Registro pueden incluir información como la dirección de protocolo de Internet ("IP") de tu computadora, la versión del navegador, las páginas de nuestro Servicio que visitas, la fecha y hora de tu visita, el tiempo que pasas en esas páginas y otras estadísticas.<br></br>
            Cookies<br></br>
            
            Las cookies son archivos con una pequeña cantidad de datos que se utilizan comúnmente como identificadores únicos anónimos. Se envían a tu navegador desde el sitio web que visitas y se almacenan en el disco duro de tu computadora.<br></br>
            
            Podemos emplear compañías e individuos de terceros por las siguientes razones:<br></br>
            
                Facilitar nuestro Servicio;<br></br>
                Proporcionar el Servicio en nuestro nombre;<br></br>
                Realizar servicios relacionados con el Servicio; o<br></br>
                Ayudarnos a analizar cómo se utiliza nuestro Servicio.<br></br>
            
            Queremos informar a los usuarios de nuestro Servicio que estos terceros tienen acceso a tu Información Personal. La razón es realizar las tareas asignadas en nuestro nombre. Sin embargo, están obligados a no divulgar ni utilizar la información para ningún otro propósito.<br></br>
            Seguridad<br></br>
            
            Valoramos tu confianza al proporcionarnos tu Información Personal, por lo que nos esforzamos por utilizar medios comercialmente aceptables para protegerla. Sin embargo, recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro y confiable, y no podemos garantizar su seguridad absoluta.<br></br>
            Enlaces a Otros Sitios<br></br>
            
            Nuestro Servicio puede contener enlaces a otros sitios. Si haces clic en un enlace de terceros, serás dirigido a ese sitio. Ten en cuenta que estos sitios externos no son operados por nosotros. Por lo tanto, te recomendamos encarecidamente que revises la Política de Privacidad de estos sitios web. No tenemos control sobre el contenido, las políticas de privacidad o las prácticas de ningún sitio o servicio de terceros.<br></br>
            
            Privacidad de los Niños<br></br>
            
            Nuestros Servicios no están dirigidos a personas menores de 13 años. No recopilamos intencionadamente información personal identificable de niños menores de 13 años. En caso de que descubramos que un niño menor de 13 años nos ha proporcionado información personal, la eliminamos inmediatamente de nuestros servidores. Si eres padre o tutor y eres consciente de que tu hijo nos ha proporcionado información personal, contáctanos para que podamos tomar las acciones necesarias.<br></br>
            Cambios en Esta Política de Privacidad<br></br>
            
            Podemos actualizar nuestra Política de Privacidad de vez en cuando. Por lo tanto, te recomendamos que revises esta página periódicamente para conocer cualquier cambio. Te informaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página. Estos cambios son efectivos inmediatamente después de su publicación en esta página.<br></br>
            
            Nuestra Política de Privacidad fue creada con la ayuda de la Plantilla de Política de Privacidad.<br></br>
            Contáctanos<br></br>
            
            Si tienes alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dudes en contactarnos.`;

            document.querySelector('.support2 h2').innerHTML = 'Soporte y contacto';
            document.querySelector('.support2 p').innerHTML = `Si tiene problemas para comprender o navegar por MUNO, o necesita ayuda, comience por utilizar los distintos canales de la comunidad. Los desarrolladores de MUNO están ocupados mejorando MUNO, por lo que no siempre pueden responder preguntas. Sin embargo, estarán encantados de ayudarle si no recibe una respuesta por los medios tradicionales.`;

  
            break;
        case 'German':
            // document.querySelector('#home').textContent = 'Start';
            document.querySelector('#about').textContent = 'Über';
            document.querySelector('#download').textContent = 'Start';
            document.querySelector('#faq').textContent = 'FAQs';
            // document.querySelector('#login').textContent = 'Anmeldung';
            document.querySelector('.main-text').textContent = 'Über MUNO';
            document.querySelector('title').textContent = 'Über - MUNO';
            document.querySelector('.support h2').innerHTML = 'Verhaltenskodex';
            document.querySelector('.support p').innerHTML = 'Das MUNO-Projekt ist eine internationale Gemeinschaft, die allen ohne Diskriminierung offen steht. Wir möchten, dass diese Community sowohl für Neuankömmlinge als auch für bestehende Mitglieder ein sicherer und einladender Ort ist. Jeder soll sich wohl und akzeptiert fühlen, unabhängig von seinem persönlichen Hintergrund und seiner Zugehörigkeit zum MUNO-Projekt.';
            document.querySelector('.support1 h2').innerHTML = 'Datenschutzrichtlinie';
            document.querySelector('.support1 p').innerHTML = `MUNO betreibt die Website MUNO.com, die den SERVICE bereitstellt.<br></br>

            Diese Seite wird verwendet, um Website-Besucher über unsere Richtlinien zur Erfassung, Verwendung und Offenlegung personenbezogener Daten zu informieren, falls sich jemand für die Nutzung unseres Dienstes, der MUNO-Website, entscheidet.<br></br>
           
            Wenn Sie sich für die Nutzung unseres Dienstes entscheiden, stimmen Sie der Erfassung und Nutzung von Informationen im Zusammenhang mit dieser Richtlinie zu. Die von uns erfassten personenbezogenen Daten werden zur Bereitstellung und Verbesserung des Dienstes verwendet. Wir werden Ihre Daten nicht verwenden oder an Dritte weitergeben, außer wie in dieser Datenschutzrichtlinie beschrieben.<br></br>
           
            Die in dieser Datenschutzrichtlinie verwendeten Begriffe haben die gleiche Bedeutung wie in unseren Allgemeinen Geschäftsbedingungen, die unter file:///C:/Users/kfuta/Downloads/muno_main.html zugänglich sind, sofern in dieser Datenschutzrichtlinie nichts anderes definiert ist.<br ></br>
            Sammlung und Nutzung von Informationen<br></br>
           
            Für ein besseres Erlebnis bei der Nutzung unseres Dienstes kann es sein, dass wir Sie auffordern, uns bestimmte persönlich identifizierbare Informationen zur Verfügung zu stellen, einschließlich, aber nicht beschränkt auf, Ihren Namen, Ihre Telefonnummer und Ihre Postanschrift. Die von uns erfassten Informationen werden dazu verwendet, Sie zu kontaktieren oder zu identifizieren.<br></br>
            Protokolldaten<br></br>
           
            Wir möchten Sie darüber informieren, dass wir bei jedem Besuch unseres Dienstes Informationen sammeln, die Ihr Browser an uns sendet, sogenannte Protokolldaten. Diese Protokolldaten können Informationen wie die Internetprotokolladresse („IP“) Ihres Computers, die Browserversion, die von Ihnen besuchten Seiten unseres Dienstes, die Uhrzeit und das Datum Ihres Besuchs, die auf diesen Seiten verbrachte Zeit und andere Statistiken enthalten.< br></br>
            Cookies<br></br>
           
            Cookies sind Dateien mit kleinen Datenmengen, die üblicherweise als anonyme eindeutige Kennung verwendet werden. Diese werden von der Website, die Sie besuchen, an Ihren Browser gesendet und auf der Festplatte Ihres Computers gespeichert.<br></br>
           
            Unsere Website verwendet diese „Cookies“, um Informationen zu sammeln und unseren Service zu verbessern. Sie haben die Möglichkeit, diese Cookies entweder zu akzeptieren oder abzulehnen, und wissen, wann ein Cookie an Ihren Computer gesendet wird. Wenn Sie unsere Cookies ablehnen, können Sie möglicherweise einige Teile unseres Dienstes nicht nutzen.<br></br>
            Dienstleister<br></br>
           
            Aus folgenden Gründen können wir Drittunternehmen und Einzelpersonen beschäftigen:<br></br>
           
                Um unseren Service zu erleichtern;<br></br>
                Um den Service in unserem Namen bereitzustellen;<br></br>
                Um servicebezogene Dienstleistungen zu erbringen; oder<br></br>
                Um uns bei der Analyse der Nutzung unseres Dienstes zu unterstützen.<br></br>
           
            Wir schätzen Ihr Vertrauen in die Bereitstellung Ihrer personenbezogenen Daten und sind daher bestrebt, kommerziell akzeptable Mittel zum Schutz dieser Daten einzusetzen. Bedenken Sie jedoch, dass keine Methode der Übertragung über das Internet oder Methode der elektronischen Speicherung 100 % sicher und zuverlässig ist und wir ihre absolute Sicherheit nicht garantieren können.<br></br>
           
            Unser Service kann Links zu anderen Websites enthalten. Wenn Sie auf einen Link eines Drittanbieters klicken, werden Sie zu dieser Website weitergeleitet. Bitte beachten Sie, dass diese externen Seiten nicht von uns betrieben werden. Wir empfehlen Ihnen daher dringend, die Datenschutzrichtlinien dieser Websites zu lesen. Wir haben keine Kontrolle über die Inhalte, Datenschutzrichtlinien oder Praktiken von Websites oder Diensten Dritter und übernehmen keine Verantwortung dafür.<br></br>
           
            Unsere Dienste richten sich nicht an Personen unter 13 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Sollten wir feststellen, dass ein Kind unter 13 Jahren uns personenbezogene Daten zur Verfügung gestellt hat, löschen wir diese unverzüglich von unseren Servern. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und wissen, dass Ihr Kind uns personenbezogene Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte, damit wir die erforderlichen Maßnahmen ergreifen können.<br></br>
            Änderungen an dieser Datenschutzrichtlinie<br></br>
           
            Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir empfehlen Ihnen daher, diese Seite regelmäßig auf etwaige Änderungen zu überprüfen. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen. Diese Änderungen treten sofort nach der Veröffentlichung auf dieser Seite in Kraft.<br></br>
           
            Unsere Datenschutzrichtlinie wurde mit Hilfe der Datenschutzrichtlinie-Vorlage erstellt.<br></br>
            Kontaktieren Sie uns<br></br>`;
            document.querySelector('.support2 h2').innerHTML = 'Support & Kontakt';
            document.querySelector('.support2 p').innerHTML = `Wenn Sie Probleme beim Verstehen oder Navigieren in MUNO haben oder Hilfe benötigen, nutzen Sie bitte zunächst die verschiedenen Community-Kanäle. Die MUNO-Entwickler sind damit beschäftigt, MUNO besser zu machen, daher können sie nicht immer Fragen beantworten. Sie helfen Ihnen jedoch gerne weiter, wenn Sie mit herkömmlichen Mitteln keine Antwort erhalten.`;

  
            break;
        default:
            // document.querySelector('#home').textContent = 'Home';
            document.querySelector('#about').textContent = 'About';
            document.querySelector('#download').textContent = 'Start';
            document.querySelector('#faq').textContent = 'FAQs';
            // document.querySelector('#login').textContent = 'Login';
            document.querySelector('.main-text').textContent = 'About MUNO';
            document.querySelector('title').innerHTML = 'About - MUNO';
            document.querySelector('.support h2').innerHTML = 'Code of Conduct';
            document.querySelector('.support p').innerHTML = ' The MUNO project is an international community open to everyone without discrimination. We want this community to be a safe and welcoming place for both newcomers and current members. Everyone should feel comfortable and accepted regardless of their personal background and affiliation to the MUNO project. ';
            document.querySelector('.support1 h2').innerHTML = 'Privacy Policy';
            document.querySelector('.support1 p').innerHTML = `MUNO operates the MUNO.com website, which provides the SERVICE.<br></br>

            This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the MUNO website.<br></br>
            
            If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.<br></br>
            
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at file:///C:/Users/kfuta/Downloads/muno_main.html, unless otherwise defined in this Privacy Policy.<br></br>
            Information Collection and Use<br></br>
            
            For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.<br></br>
            Log Data<br></br>
            
            We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.<br></br>
            Cookies<br></br>
            
            Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.<br></br>
            
            Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.<br></br>
            Service Providers<br></br>
            
            We may employ third-party companies and individuals due to the following reasons:<br></br>
            
                To facilitate our Service;<br></br>
                To provide the Service on our behalf;<br></br>
                To perform Service-related services; or<br></br>
                To assist us in analyzing how our Service is used.<br></br>
            
            We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.<br></br>
            Security<br></br>
            
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.<br></br>
            Links to Other Sites<br></br>
            
            Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.<br></br>
            
            Children's Privacy<br></br>
            
            Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.<br></br>
            Changes to This Privacy Policy<br></br>
            
            We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.<br></br>
            
            Our Privacy Policy was created with the help of the Privacy Policy Template.<br></br>
            Contact Us<br></br>
            
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.`;
            document.querySelector('.support2 h2').innerHTML = 'Support & Contact';
            document.querySelector('.support2 p').innerHTML = `If you have a problem understanding or navigating MUNO or need help, please first use the various community channels. MUNO developers are busy working in making MUNO better, so they can't always answer questions. They will, however, be glad to assist you if you can't get an answer from conventional means. `;




            break;
    }
  
  }