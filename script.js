document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('themeSelector');
    const themeStylesheet = document.getElementById('themeStylesheet');

    // Verifica o tema salvo no localStorage e aplica
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        themeStylesheet.setAttribute('href', savedTheme);
        themeSelector.value = savedTheme; // Seleciona o tema salvo no dropdown
    }

    // Muda o tema ao selecionar no dropdown
    themeSelector.addEventListener('change', function() {
        const selectedTheme = themeSelector.value;
        themeStylesheet.setAttribute('href', selectedTheme);
        localStorage.setItem('theme', selectedTheme); // Salva o tema no localStorage
    });

    // Navegação entre telas (de arquivo para arquivo)
    document.getElementById('register-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'register.html';
    });

    document.getElementById('login-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'login.html';
    });

    document.getElementById('forgot-password-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'reset_password.html';
    });

    document.getElementById('login-from-reset-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'login.html';
    });
});
