function menuMobile() {
    const menuMobileContent = document.querySelector(".menu-mobile-content");
    const iconMenuMobile = document.querySelector(".menu-mobile-button");
    const menuMobileButton = document.getElementById("menu-mobile-button-img");

    if (menuMobileContent) {
        menuMobileContent.classList.toggle("active");
        iconMenuMobile.classList.toggle("active-icon");

        if (menuMobileContent.classList.contains("active")) {
            menuMobileButton.src = "./src/x.png"; // Caminho para o ícone de "fechar"
            addCloseMenuEvent(menuMobileContent, iconMenuMobile);
        } else {
            menuMobileButton.src = "./src/menu-mobile.png"; // Caminho para o ícone de "menu"
            removeCloseMenuEvent();
        }
    } else {
        console.error("Elemento com a classe 'menu-mobile-content' não encontrado.");
    }
}

function addCloseMenuEvent(menu, button) {
    function handleClickOutside(event) {
        // Verifica se o clique foi fora do menu e do botão
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            closeMenu();
        }
    }

    // Fecha o menu ao clicar em um link ou botão dentro do menu
    function handleMenuItemClick(event) {
        if (event.target.tagName === "A" || event.target.tagName === "BUTTON") {
            closeMenu();
        }
    }

    // Adiciona os eventos
    document.addEventListener("click", handleClickOutside);
    menu.addEventListener("click", handleMenuItemClick);

    // Salva as referências dos eventos para removê-los depois
    menu._closeMenuEvent = handleClickOutside;
    menu._menuItemClickEvent = handleMenuItemClick;
}

function removeCloseMenuEvent() {
    const menu = document.querySelector(".menu-mobile-content");
    if (menu && menu._closeMenuEvent && menu._menuItemClickEvent) {
        document.removeEventListener("click", menu._closeMenuEvent);
        menu.removeEventListener("click", menu._menuItemClickEvent);
        delete menu._closeMenuEvent;
        delete menu._menuItemClickEvent;
    }
}

function closeMenu() {
    const menuMobileContent = document.querySelector(".menu-mobile-content");
    const iconMenuMobile = document.querySelector(".menu-mobile-button");
    const menuMobileButton = document.getElementById("menu-mobile-button-img");

    if (menuMobileContent && iconMenuMobile && menuMobileButton) {
        menuMobileContent.classList.remove("active");
        iconMenuMobile.classList.remove("active-icon");
        menuMobileButton.src = "./src/menu-mobile.png"; // Caminho para o ícone de "menu"
        removeCloseMenuEvent();
    }
}


