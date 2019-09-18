import CriarElemento from "../shared/criar-elemento/index.js";
import ImportCss from "../../utils/import-css/index.js";

ImportCss({ path: "cart" });

const Cart = {
  build: () => {
    const cart = CriarElemento({ tipoElemento: "div", classes: ["cart"] });
    const productList = CriarElemento({
      tipoElemento: "ul",
      classes: ["product-list"]
    });
    const totalCartBox = CriarElemento({
      tipoElemento: "div",
      classes: ["total-cart-box"]
    });
    const textTotalPedido = CriarElemento({
      tipoElemento: "span",
      classes: ["text-total-pedido"],
      conteudo: "Total do pedido"
    });
    const totalPriceCart = CriarElemento({
      tipoElemento: "span",
      classes: ["total-price-cart"],
      conteudo: "R$ 25.000,00"
    });
    const buttonBuy = CriarElemento({
      tipoElemento: "button",
      classes: ["button-buy"],
      conteudo: "FINALIZAR COMPRA"
    });

    cart.appendChild(productList);
    cart.appendChild(totalCartBox);
    cart.appendChild(buttonBuy);
    totalCartBox.appendChild(textTotalPedido);
    totalCartBox.appendChild(totalPriceCart);

    return cart;
  },
  remove: () => {
      const cart = document.querySelector('.cart');
      cart.remove();
  }
};

export default Cart;
