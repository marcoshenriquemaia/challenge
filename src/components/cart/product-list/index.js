import CriarElemento from "../../shared/criar-elemento/index.js";
import Product from "./product/index.js";
import ImportCss from "../../../utils/import-css/index.js";
import store from "../../../store/index.js";

ImportCss({path: 'cart/product-list'});

const ProductList = {
  build: () => {
    const productInformations = store.getState();
    const { cart: {item: item} } = productInformations;
    console.log('teste1',productInformations);
    console.log('teste2',item);
    console.log('teste3',item[0])
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