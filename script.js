window.onscroll = function() {
  var appear1 = 320
  if (window.pageYOffset >= appear1) {
    document.getElementById("bottomtop1").style.opacity = '1'
    document.getElementById("bottomtop1").style.pointerEvents = 'all'
    document.getElementById("imgfade1").style.opacity = '1'
    document.getElementById("imgfade1").style.pointerEvents = 'all'
  } else {
    document.getElementById("bottomtop1").style.opacity = '0'
    document.getElementById("bottomtop1").style.pointerEvents = 'none'
    document.getElementById("imgfade1").style.opacity = '0'
    document.getElementById("imgfade1").style.pointerEvents = 'none'
  }

  var appear2 = 700
  if (window.pageYOffset >= appear2) {
    document.getElementById("bottomtop2").style.opacity = '1'
    document.getElementById("bottomtop2").style.pointerEvents = 'all'
    document.getElementById("imgfade2").style.opacity = '1'
    document.getElementById("imgfade2").style.pointerEvents = 'all'
  } else {
    document.getElementById("bottomtop2").style.opacity = '0'
    document.getElementById("bottomtop2").style.pointerEvents = 'none'
    document.getElementById("imgfade2").style.opacity = '0'
    document.getElementById("imgfade2").style.pointerEvents = 'none'
  }

  var appear3 = 1140
  if (window.pageYOffset >= appear3) {
    document.getElementById("bottomtop3").style.opacity = '1'
    document.getElementById("bottomtop3").style.pointerEvents = 'all'
    document.getElementById("imgfade3").style.opacity = '1'
    document.getElementById("imgfade3").style.pointerEvents = 'all'
    
  } else {
    document.getElementById("bottomtop3").style.opacity = '0'
    document.getElementById("bottomtop3").style.pointerEvents = 'none'
    document.getElementById("imgfade3").style.opacity = '0'
    document.getElementById("imgfade3").style.pointerEvents = 'none'
  }

  var appear4 = 1420
  if (window.pageYOffset >= appear4) {
    document.getElementById("bottomtop4").style.opacity = '1'
    document.getElementById("bottomtop4").style.pointerEvents = 'all'
  } else {
    document.getElementById("bottomtop4").style.opacity = '0'
    document.getElementById("bottomtop4").style.pointerEvents = 'none'
  }

}




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
          document.querySelector('.main-text').innerHTML = 'BIENVENUE À<br>MUNO';
          document.querySelector('.idealLLP').textContent = 'Votre programme idéal pour apprendre une langue.';
          // document.querySelector('#home').textContent = 'Accueil';
          document.querySelector('#about').textContent = 'À Propos';
          document.querySelector('#download').textContent = 'Commencer';
          document.querySelector('#faq').textContent = 'FAQ';
          // document.querySelector('#login').textContent = 'Connexion';
          document.querySelector('#bottomtop1').innerHTML = "Apprendre une nouvelle <br></br>langue n'a jamais été <br></br>aussi facile.";
          document.querySelector('#bottomtop2').textContent = 'GRATUIT et ACCESSIBLE.';
          document.querySelector('#bottomtop3').innerHTML = 'Personnalisé dans VOTRE <br></br>meilleur intérêt.';
          document.querySelector('#bottomtop4').innerHTML = 'COMMENCEZ MAINTENANT!';
          document.querySelector('title').innerHTML = 'MUNO';

          break;
      case 'Spanish':
          document.querySelector('.main-text').innerHTML = 'BIENVENIDO A<br>MUNO';
          document.querySelector('.idealLLP').textContent = 'Su programa ideal para aprender un idioma.';
          // document.querySelector('#home').textContent = 'Inicio';
          document.querySelector('#about').textContent = 'Acerca De';
          document.querySelector('#download').textContent = 'Comenzar';
          document.querySelector('#faq').textContent = 'FAQ';
          // document.querySelector('#login').textContent = 'Acceso';
          document.querySelector('#bottomtop1').innerHTML = 'Aprender un nuevo idioma <br></br>nunca ha sido tan fácil.';
          document.querySelector('#bottomtop2').textContent = 'GRATIS y ACCESIBLE.';
          document.querySelector('#bottomtop3').innerHTML = 'Personalizado en TU <br></br>mejor interés.';
          document.querySelector('#bottomtop4').innerHTML = '¡EMPEZAR AHORA!';
          document.querySelector('title').innerHTML = 'MUNO';



          break;
      case 'German':
          document.querySelector('.main-text').innerHTML = 'WILLKOMMEN BEI<br>MUNO';
          document.querySelector('.idealLLP').textContent = 'Ihr ideales Sprachlernprogramm.';
          // document.querySelector('#home').textContent = 'Start';
          document.querySelector('#about').textContent = 'Über';
          document.querySelector('#download').textContent = 'Start';
          document.querySelector('#faq').textContent = 'FAQs';
          // document.querySelector('#login').textContent = 'Anmeldung';
          document.querySelector('#bottomtop1').innerHTML = 'Eine neue Sprache zu <br></br>lernen war noch nie <br></br>so einfach.';
          document.querySelector('#bottomtop2').innerHTML = 'KOSTENLOS und <br></br>ZUGÄNGLICH.';
          document.querySelector('#bottomtop3').innerHTML = 'Individuell auf DEINEN <br></br>besten Nutzen zugeschnitten.';
          document.querySelector('#bottomtop4').innerHTML = 'JETZT ANFANGEN!';
          document.querySelector('title').innerHTML = 'MUNO';



          break;
      default:
          document.querySelector('.main-text').innerHTML = 'WELCOME TO<br>MUNO';
          document.querySelector('.idealLLP').textContent = 'Your ideal language learning program.';
          // document.querySelector('#home').textContent = 'Home';
          document.querySelector('#about').textContent = 'About';
          document.querySelector('#download').textContent = 'Start';
          document.querySelector('#faq').textContent = 'FAQs';
          // document.querySelector('#login').textContent = 'Login';
          document.querySelector('#bottomtop1').innerHTML = 'Learning a new language <br></br>has never been easier.';
          document.querySelector('#bottomtop2').textContent = 'FREE and ACCESSIBLE.';
          document.querySelector('#bottomtop3').innerHTML = 'Personalized in YOUR <br></br>best interest.';
          document.querySelector('#bottomtop4').innerHTML = 'START NOW!';
          document.querySelector('title').innerHTML = 'MUNO';


          break;
  }

}