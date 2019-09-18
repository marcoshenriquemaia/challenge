import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({path: 'navbar/nav-buttons-wrapper'});

const NavButtonsWrapper = {
  build: () => {
    const navButtonsWrapper = CriarElemento({
      tipoElemento: "ul",
      classes: ["nav-buttons-wrapper"]
    });
    const navButton1 = CriarElemento({
      tipoElemento: "li",
      classes: ["nav-button-item", "nav-button-item1"],
      conteudo: 'Lorem ipsum'
    });
    const navButton2 = CriarElemento({
      tipoElemento: "li",
      classes: ["nav-button-item", "nav-button-item2"],
      conteudo: 'Lorem ipsum'
    });
    const navButton3 = CriarElemento({
      tipoElemento: "li",
      classes: ["nav-button-item", "nav-button-item3"],
      conteudo: 'Lorem ipsum'
    });
    const navButton4 = CriarElemento({
      tipoElemento: "li",
      classes: ["nav-button-item", "nav-button-item4"],
      conteudo: 'Lorem ipsum'
    });
    const navButton5 = CriarElemento({
      tipoElemento: "li",
      classes: ["nav-button-item", "nav-button-item5"],
      conteudo: 'Lorem ipsum'
    });

    navButtonsWrapper.appendChild(navButton1);
    navButtonsWrapper.appendChild(navButton2);
    navButtonsWrapper.appendChild(navButton3);
    navButtonsWrapper.appendChild(navButton4);
    navButtonsWrapper.appendChild(navButton5);

    return navButtonsWrapper;
  },
  remove: () =>{

  }
};

export default NavButtonsWrapper;
