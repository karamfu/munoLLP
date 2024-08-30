document.addEventListener("DOMContentLoaded", function () {
    var toggles = document.querySelectorAll(".toggle");

    toggles.forEach(function (toggle) {
        toggle.addEventListener("change", function () {
            toggles.forEach(function (otherToggle) {
                if (otherToggle !== toggle) {
                    otherToggle.checked = false;
                }
            });
        });
    });
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
        document.querySelector('.main-text').textContent = 'Voici quelques questions fréquemment posées :';
        document.querySelector('#q1').textContent = 'Qu’est-ce que MUNO ?';
        document.querySelector('#q2').textContent = 'Comment puis-je utiliser MUNO ?';
        document.querySelector('#q3').textContent = 'MUNO est-il gratuit?';
        document.querySelector('#q4').textContent = 'Quelles langues sont disponibles pour apprendre ?';
        document.querySelector('#q5').textContent = 'Existe-t-il des abonnements payants ?';
        
        document.querySelector('#a1').textContent = "MUNO est une plateforme virtuelle d'apprentissage des langues destinée aux personnes de tous niveaux, dédiée à encourager votre parcours de maîtrise des langues.";
        document.querySelector('#a2').textContent = 'Notre page de téléchargement propose deux options de téléchargement en fonction de votre appareil. Lorsque vous exécutez le programme, nous avons des instructions claires sur la façon de naviguer dans notre interface.';
        document.querySelector('#a3').textContent = 'OUI! Nous sommes très fiers de dire que nos services sont entièrement gratuits et sans aucune promotion payante.';
        document.querySelector('#a4').textContent = "MUNO ne prend actuellement en charge l'apprentissage de l'anglais que dans sa version BETA. Cependant, nous cherchons à proposer des enseignements dans au moins 15 langues différentes.";
        document.querySelector('#a5').textContent = 'À l’heure actuelle, tous nos services disponibles sont entièrement gratuits et nous espérons proposer une fonctionnalité premium offrant de vastes options pour notre communauté bien-aimée.';
        document.querySelector('title').innerHTML = 'FAQ - MUNO';


        break;
    case 'Spanish':
        // document.querySelector('#home').textContent = 'Inicio';
        document.querySelector('#about').textContent = 'Acerca De';
        document.querySelector('#download').textContent = 'Comenzar';
        document.querySelector('#faq').textContent = 'FAQ';
        // document.querySelector('#login').textContent = 'Acceso';
        document.querySelector('.main-text').textContent = 'Descárgalo para tu dispositivo.';
        document.querySelector('#q1').textContent = '¿Qué es MUNO?';
        document.querySelector('#q2').textContent = '¿Cómo puedo utilizar MUNO?';
        document.querySelector('#q3').textContent = '¿MUNO es gratuito?';
        document.querySelector('#q4').textContent = '¿Qué idiomas están disponibles para aprender?';
        document.querySelector('#q5').textContent = '¿Hay membresías pagas?';
        
        document.querySelector('#a1').textContent = 'MUNO es una plataforma virtual de aprendizaje de idiomas dirigida a personas de todos los niveles, dedicada a fomentar tu proceso de dominio del idioma.';
        document.querySelector('#a2').textContent = 'Nuestra página de descarga presenta dos opciones de descarga según su dispositivo; cuando ejecuta el programa, tenemos instrucciones claras sobre cómo navegar por nuestra interfaz.';
        document.querySelector('#a3').textContent = '¡SÍ! Estamos muy orgullosos de decir que nuestros servicios son completamente gratuitos y sin promociones pagas.';
        document.querySelector('#a4').textContent = 'Actualmente, MUNO solo admite el aprendizaje de inglés en su versión BETA. Sin embargo, como proyecto en constante expansión, buscamos brindar enseñanza en al menos 15 idiomas diferentes.';
        document.querySelector('#a5').textContent = 'En nuestra etapa actual, todos nuestros servicios disponibles son completamente gratuitos y esperamos lanzar una función premium con amplias opciones para nuestra querida comunidad.';
        document.querySelector('title').innerHTML = 'FAQ - MUNO';


        break;
    case 'German':
        // document.querySelector('#home').textContent = 'Start';
        document.querySelector('#about').textContent = 'Über';
        document.querySelector('#download').textContent = 'Start';
        document.querySelector('#faq').textContent = 'FAQs';
        // document.querySelector('#login').textContent = 'Anmeldung';
        document.querySelector('.main-text').textContent = 'Hier sind einige häufig gestellte Fragen:';
        document.querySelector('#q1').textContent = 'Was ist MUNO?';
        document.querySelector('#q2').textContent = 'Wie kann ich MUNO nutzen?';
        document.querySelector('#q3').textContent = 'Ist MUNO kostenlos?';
        document.querySelector('#q4').textContent = 'Welche Sprachen stehen zum Lernen zur Verfügung?';
        document.querySelector('#q5').textContent = 'Gibt es kostenpflichtige Mitgliedschaften?';
        
        document.querySelector('#a1').textContent = 'MUNO ist eine virtuelle Plattform zum Erlernen von Sprachen, die sich an Menschen aller Niveaus richtet und deren Ziel es ist, Sie auf Ihrem Weg zur Sprachbeherrschung zu unterstützen.';
        document.querySelector('#a2').textContent = 'Unsere Download-Seite bietet je nach Gerät zwei Download-Optionen. Wenn Sie das Programm ausführen, erhalten Sie klare Anweisungen zur Navigation auf unserer Benutzeroberfläche.';
        document.querySelector('#a3').textContent = 'JA! Wir sind sehr stolz darauf, sagen zu können, dass unsere Dienste völlig kostenlos sind und keine kostenpflichtigen Werbeaktionen angeboten werden.';
        document.querySelector('#a4').textContent = 'MUNO unterstützt derzeit nur das Englischlernen in seiner BETA-Version. Wir möchten jedoch Unterricht in mindestens 15 verschiedenen Sprachen anbieten.';
        document.querySelector('#a5').textContent = 'Derzeit sind alle unsere verfügbaren Dienste völlig kostenlos und wir hoffen, unserer geliebten Community eine Premium-Funktion mit umfangreichen Optionen anbieten zu können.';
        document.querySelector('title').innerHTML = 'FAQs - MUNO';

        
        break;
    default:
        // document.querySelector('#home').textContent = 'Home';
        document.querySelector('#about').textContent = 'About';
        document.querySelector('#download').textContent = 'Start';
        document.querySelector('#faq').textContent = 'FAQs';
        // document.querySelector('#login').textContent = 'Login';
        document.querySelector('.main-text').textContent = 'Here are some frequently asked questions:';
        document.querySelector('#q1').textContent = 'What is MUNO?';
        document.querySelector('#q2').textContent = 'How can I use MUNO?';
        document.querySelector('#q3').textContent = 'Is MUNO free?';
        document.querySelector('#q4').textContent = 'What languages are available to learn?';
        document.querySelector('#q5').textContent = 'Are there any paid memberships?';
        
        document.querySelector('#a1').textContent = 'MUNO is a virtual language learning platform aimed towards people of all levels, dedicated to encouraging your language mastery journey.';
        document.querySelector('#a2').textContent = 'Our download page features two download options depending on your device, when you run the program we have clear instructions how to navigate our interface.';
        document.querySelector('#a3').textContent = 'YES! We are very proud to say that our services are completely free with zero paid promotions.';
        document.querySelector('#a4').textContent = 'MUNO currently only supports English learning in its BETA version. However, as an ever-expanding project, we look to provide teachings in at least 15 different languages.';
        document.querySelector('#a5').textContent = 'At our current stage, all our available services are completely free, and in the future are hoping to release a premium feature with vast options for our beloved community.';
        document.querySelector('title').innerHTML = 'FAQs - MUNO';

        break;
}

}