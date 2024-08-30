function getSelectedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'English';
}

function setSelectedLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
}
