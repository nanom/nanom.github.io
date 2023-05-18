const darkTheme = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'dark');
    document.querySelector('body').setAttribute('class', 'section-font-dark');
    document.querySelector('#btn-follow').setAttribute('class', 'btn btn-sm btn-outline-secondary');
    var a = document.querySelectorAll('#theme-mode-icon'); 
    a.forEach(element => {
        element.setAttribute('class', 'fa fa-sun');
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
}

const themeMode = () => {
    var mode = document.querySelector('body').getAttribute('data-bs-theme');
    mode === 'light' ? darkTheme() : lightTheme();
}

