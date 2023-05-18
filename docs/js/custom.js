const moon_icon = "fa-regular fa-moon";
const sun_icon = "fa-regular fa-sun";
const dark_font = "section-font-dark";
const light_font = "section-font-light";
const dark_button = "btn btn-sm btn-outline-secondary";
const light_button = "btn btn-sm btn-outline-dark";
const dark_links = "social-links-dark";
const light_links = "social-links-light";


const darkTheme = () => {

    document.querySelector('body').setAttribute('data-bs-theme', 'dark');
    document.querySelector('body').setAttribute('class', dark_font);
    document.querySelector('#btn-follow').setAttribute('class', dark_button);
    
    document.querySelectorAll('#theme-mode-icon').forEach(element => {
        element.setAttribute('class', sun_icon);
    });

    document.querySelectorAll('#social-links').forEach(element => {
        var c = element.getAttribute('class');
        element.setAttribute('class', c.replace(light_links, dark_links));
    });
}

const lightTheme = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'light');
    document.querySelector('body').setAttribute('class', light_font);
    document.querySelector('#btn-follow').setAttribute('class', light_button);
    
    document.querySelectorAll('#theme-mode-icon').forEach(element => {
        element.setAttribute('class', moon_icon);
    });

    document.querySelectorAll('#social-links').forEach(element => {
        var c = element.getAttribute('class');
        element.setAttribute('class', c.replace(dark_links, light_links));
    });
}

const applyManualTheme = () => {
    var mode = document.querySelector('body').getAttribute('data-bs-theme');
    if (mode == 'light') {
        darkTheme();
    } else {
        lightTheme();
    };
};

const applyThemeBasedOnTime = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 20 || currentHour < 7) {
        darkTheme();
    } else {
        lightTheme();
    }
};

applyThemeBasedOnTime();