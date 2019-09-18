import CriarElemento from "../../shared/criar-elemento/index.js";
import Product from "./product/index.js";
import ImportCss from "../../../utils/import-css/index.js";
import store from "../../../store/index.js";

ImportCss({ path: "cart/product-list" });

const ProductList = {
  build: () => {
    const productList = CriarElemento({
      tipoElemento: "ul",
      classes: ["product-list"]
    });
    const productInformations = store.getState();
    const {cart: { item: item }} = productInformations;
    item.map(product => {
      console.log(product);
      const { bestPriceFormated, image, name, productId, quantity } = product;
      const newProduct = Product.build({
        bestPriceFormated,
        image,
        name,
        productId,
        quantity
      });

      productList.appendChild(newProduct);
    });

    return productList;
  },
  remove: () => {
    const productList = document.querySelector(".product-list");
    productList.remove();
  }
};

export default ProductList;
