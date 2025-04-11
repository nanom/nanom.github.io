// Manejo de themas
const moon_icon = "fa-regular fa-moon";
const sun_icon = "fa-regular fa-sun";
const dark_font = "section-font-dark";
const light_font = "section-font-light";
const dark_button = "btn btn-sm btn-outline-secondary";
const light_button = "btn btn-sm btn-outline-dark";
const dark_links = "social-links-dark";
const light_links = "social-links-light";

const light_avatar = "/images/avatar_bw.png"
const dark_avatar = "/images/avatar_color.png"


const darkTheme = () => {

    document.querySelector('body').setAttribute('data-bs-theme', 'dark');
    document.querySelector('body').setAttribute('class', dark_font);
    document.querySelector('#btn-follow').setAttribute('class', dark_button);
    
    document.querySelectorAll('#avatar_img').forEach(element => {
        element.setAttribute('src', dark_avatar);
    });

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
    
    document.querySelectorAll('#avatar_img').forEach(element => {
        element.setAttribute('src', light_avatar);
    });

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

// Paginador de sección 'Things'
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 6;
    const milestones = document.querySelectorAll(".milestone");
    const pagination = document.getElementById("milestone-pagination");
    const totalPages = Math.ceil(milestones.length / itemsPerPage);
    
    function scrollUp() {
      // Sube la página y hace foco al comienzo de la seccion
      document.getElementById("sec-things").scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
    }

    function showPage(page) {
      milestones.forEach((el, idx) => {
        el.style.display = (idx >= (page - 1) * itemsPerPage && idx < page * itemsPerPage) ? 'block' : 'none';
      });
    }

    function buildPagination() {
      pagination.innerHTML = "";

      // Botón de 'Latest'
      const firstLi = document.createElement("li");
      firstLi.className = "page-item";
      firstLi.innerHTML = `<a class="page-link" href="#">« Latest</a>`;
      firstLi.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(1);
        setActive(1);
        scrollUp();
      });
      pagination.appendChild(firstLi);

      // Botones de páginas
      for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.className = "page-item";
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener("click", (e) => {
          e.preventDefault();
          showPage(i);
          setActive(i);
          scrollUp();
        });
        pagination.appendChild(li);
      }

      // Botón de 'Earliest'
      const lastLi = document.createElement("li");
      lastLi.className = "page-item";
      lastLi.innerHTML = `<a class="page-link" href="#">Earliest »</a>`;
      lastLi.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(totalPages);
        setActive(totalPages);
        scrollUp();
      });
      pagination.appendChild(lastLi);
    }

    function setActive(page) {
      document.querySelectorAll("#milestone-pagination .page-item").forEach((item, idx) => {
        item.classList.remove('active');
        // Index shift because first and last are not numbered
        if (idx === page) {
          item.classList.add('active');
        }
      });
    }

    buildPagination();
    showPage(1);
    setActive(1);
  });