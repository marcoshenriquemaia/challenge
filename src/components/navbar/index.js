import CriarElemento from "../shared/criar-elemento/index.js";
import NavButtonsWrapper from "./nav-buttons-wrapper/index.js";
import IconsWrapper from "./icons-wrapper/index.js";
import ImportCss from "../../utils/import-css/index.js";

ImportCss({path: 'navbar'});

const Navbar = {
    build: () =>{
        const $body = document.querySelector('body');
        const nav = CriarElemento({tipoElemento: 'nav', classes: ['navbar']});
        const logo = CriarElemento({tipoElemento: 'img', classes: ['logo'], imagem: './src/assets/images/logo/agencia-eplus-n-logo.png'});
        const navButtons = NavButtonsWrapper.build();
        const icons = IconsWrapper.build();

        $body.appendChild(nav);
        nav.appendChild(logo);
        nav.appendChild(navButtons);
        nav.appendChild(icons);
    },
    remove: () =>{
        const nav = document.querySelector('.navbar');
        nav.remove();
    }
}

export default Navbar;