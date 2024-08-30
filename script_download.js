

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
        document.querySelector('.main-text').textContent = 'Votre voyage commence ici.';
        document.querySelector('.container h2').textContent = 'Commencer';
        // document.querySelector('.container1 h2').textContent = 'Téléchargez la dernière version pour MacOS';
        document.querySelector('title').innerHTML = 'Commencer - MUNO';



        break;
    case 'Spanish':
        // document.querySelector('#home').textContent = 'Inicio';
        document.querySelector('#about').textContent = 'Acerca De';
        document.querySelector('#download').textContent = 'Comenzar';
        document.querySelector('#faq').textContent = 'FAQ';
        // document.querySelector('#login').textContent = 'Acceso';
        document.querySelector('.main-text').textContent = 'Tu viaje comienza aquí.';
        document.querySelector('.container h2').textContent = 'Empezar';
        // document.querySelector('.container1 h2').textContent = 'Descargue la última versión para MacOS';
        document.querySelector('title').textContent = 'Comenzar - MUNO';




        break;
    case 'German':
        // document.querySelector('#home').textContent = 'Start';
        document.querySelector('#about').textContent = 'Über';
        document.querySelector('#download').textContent = 'Loslege';
        document.querySelector('#faq').textContent = 'FAQs';
        // document.querySelector('#login').textContent = 'Anmeldung';
        document.querySelector('.main-text').textContent = 'Ihre Reise beginnt hier.';
        document.querySelector('.container h2').textContent = 'Loslege';
        // document.querySelector('.container1 h2').textContent = 'Laden Sie die neueste Version für MacOS herunter';
        document.querySelector('title').innerHTML = 'Loslege - MUNO';


        break;
    default:
        // document.querySelector('#home').textContent = 'Home';
        document.querySelector('#about').textContent = 'About';
        document.querySelector('#download').textContent = 'Start';
        document.querySelector('#faq').textContent = 'FAQs';
        // document.querySelector('#login').textContent = 'Login';
        document.querySelector('.main-text').textContent = 'Your Journey Starts Here.';
        document.querySelector('.container h2').textContent = 'Get Started';
        // document.querySelector('.container1 h2').textContent = 'Download latest version for MacOS';
        document.querySelector('title').innerHTML = 'Start - MUNO';



        break;
}

}