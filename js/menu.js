function switchLanguage(lang) {
    let currentPath = window.location.pathname;

    if (lang === 'ru') {
    if (currentPath === '/' || currentPath === '/index.html') {
        currentPath = '/ru/sakums/';
    } else if (currentPath.startsWith('/lv/')) {
        currentPath = currentPath.replace('/lv/', '/ru/');
    } else if (!currentPath.startsWith('/ru/')) {
        currentPath = '/ru' + currentPath;
    }
    }

    else if (lang === 'lv') {
    if (currentPath.startsWith('/ru/')) {
        if (currentPath === '/ru/sakums/' || currentPath === '/ru/sakums/index.html') {
        currentPath = '/';
        } else {
        currentPath = currentPath.replace('/ru/', '/lv/');
        }
    } else if (!currentPath.startsWith('/lv/')) {
        currentPath = '/';
    }
    }

    window.location.pathname = currentPath;
}

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  burger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
  });
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});
