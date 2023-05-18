const darkTheme = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'dark');
    document.querySelector('body').setAttribute('class', 'section-font-dark');
    document.querySelector('#btn-follow').setAttribute('class', 'btn btn-sm btn-outline-secondary');
    var a = document.querySelectorAll('#theme-mode-icon'); 
    a.forEach(element => {
        element.setAttribute('class', 'fa fa-sun');
    });

    var a = document.querySelectorAll('#social-links'); 
    a.forEach(element => {
        var c = element.getAttribute('class');
        element.setAttribute('class', c.replace('social-links-light', 'social-links-dark'));
    });
}

const lightTheme = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'light');
    document.querySelector('body').setAttribute('class', 'section-font-light');
    document.querySelector('#btn-follow').setAttribute('class', 'btn btn-sm btn-outline-dark');
    var a = document.querySelectorAll('#theme-mode-icon'); 
    a.forEach(element => {
        element.setAttribute('class', 'fa fa-moon');
    });

    var a = document.querySelectorAll('#social-links'); 
    a.forEach(element => {
        var c = element.getAttribute('class');
        element.setAttribute('class', c.replace('social-links-dark', 'social-links-light'));
    });
}

const themeMode = () => {
    var mode = document.querySelector('body').getAttribute('data-bs-theme');
    mode === 'light' ? darkTheme() : lightTheme();
}

