import CriarElemento from "../../shared/criar-elemento/index.js";
import Product from "./product/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({path: 'cart/product-list'});

const ProductList = {
  build: () => {
    const productList = CriarElemento({tipoElemento: 'ul', classes: ['product-list']})
    const product = Product.build();

    productList.appendChild(product);

    return productList;
  },
  remove: () => {
    const productList = document.querySelector('.product-list');
    productList.remove();
  },
};

export default ProductList;