import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";
import Cart from "../../cart/index.js";
import store from "../../../store/index.js";

ImportCss({ path: "navbar/icons-wrapper" });

const IconsWrapper = {
  build: () => {
    const iconWrapper = CriarElemento({
      tipoElemento: "div",
      classes: ["icons-wrapper"]
    });
    const searchButtom = CriarElemento({
      tipoElemento: "i",
      classes: ["material-icons", "md-36", "search-icon"],
      conteudo: "search"
    });
    const personButtom = CriarElemento({
      tipoElemento: "i",
      classes: ["material-icons", "md-36", "person-icon"],
      conteudo: "person"
    });
    const cartButtom = CriarElemento({
      tipoElemento: "i",
      classes: ["material-icons", "md-36", "shopping_cart"],
      conteudo: "shopping_cart"
    });

    cartButtom.addEventListener("click", () => {
      const checkCart = document.querySelector(".cart");
      const totalFormated = formatReal(store.getTotalPrice());
      const newCart = Cart.build({totalPrice: totalFormated});
      !checkCart ? iconWrapper.appendChild(newCart) : Cart.remove();
    });

    iconWrapper.appendChild(searchButtom);
    iconWrapper.appendChild(personButtom);
    iconWrapper.appendChild(cartButtom);

    return iconWrapper;
  },
  remove: () => {
    const iconWrapper = document.querySelector(".icons-wrapper");
    iconWrapper.remove();
  }
};
const formatReal = int => {
  let tmp = int + "";
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
};

export default IconsWrapper;
