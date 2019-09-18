import CriarElemento from "../shared/criar-elemento/index.js";
import NavButtonsWrapper from "./nav-buttons-wrapper/index.js";
import IconsWrapper from "./icons-wrapper/index.js";
import ImportCss from "../../utils/import-css/index.js";

ImportCss({ path: "navbar" });

//Estou aprendendo a contruir uma estrutura para o React, por isso sempre crio componentes que
//pode criar e se removerem. Poucos removes estão sendo utilizados nesse projeto, mas são extremamente
//uteis em uma aplicação mais complexa.

const Navbar = {
  build: () => {
    const $body = document.querySelector("body");
    const nav = CriarElemento({ tipoElemento: "nav", classes: ["navbar"] });
    const logo = CriarElemento({
      tipoElemento: "img",
      classes: ["logo"],
      imagem: "./src/assets/images/logo/agencia-eplus-n-logo.png"
    });
    const navButtons = NavButtonsWrapper.build();
    const icons = IconsWrapper.build();
    const menu = CriarElemento({
      tipoElemento: "i",
      classes: ["material-icons", "md-36", "menu-icon"],
      conteudo: "sort"
    });

    menu.addEventListener("click", () => navButtons.classList.toggle("menu-open"));

    $body.appendChild(nav);
    nav.appendChild(menu);
    nav.appendChild(logo);
    nav.appendChild(navButtons);
    nav.appendChild(icons);
  },
  remove: () => {
    const nav = document.querySelector(".navbar");
    nav.remove();
  }
};

export default Navbar;
