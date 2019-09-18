import CriarElemento from "../../../shared/criar-elemento/index.js";
import ImportCss from "../../../../utils/import-css/index.js";

ImportCss({path: 'cart/product-list/product'})

const Product = {
  build: () => {
    const product = CriarElemento({
      tipoElemento: "li",
      classes: ["product-box"]
    });
    const productImage = CriarElemento({
      tipoElemento: "img",
      classes: ["product-image"],
      imagem: `./src/assets/images/products/impressora-canon-160-160.jpg`
    });
    const informationProduct = CriarElemento({
      tipoElemento: "div",
      classes: ["information-products"]
    });
    const productName = CriarElemento({
      tipoElemento: "span",
      classes: ["product-name"],
      conteudo: "Impressora Multifuncional Canon Tanque..."
    });
    const productAmount = CriarElemento({
      tipoElemento: "span",
      classes: ["product-amount"],
      conteudo: "Qtd.: 1"
    });
    const amountPriceWrapper = CriarElemento({
      tipoElemento: "div",
      classes: ["amount-price-wrapper"]
    });
    const productPrice = CriarElemento({
      tipoElemento: "span",
      classes: ["product-price"],
      conteudo: "R$ 7,542,00"
    });

    product.appendChild(productImage);
    product.appendChild(informationProduct);
    informationProduct.appendChild(productName);
    informationProduct.appendChild(amountPriceWrapper);
    amountPriceWrapper.appendChild(productAmount);
    amountPriceWrapper.appendChild(productPrice);

    return product;
  },
  remove: () =>{

  }
};

export default Product;