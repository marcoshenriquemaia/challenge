import CriarElemento from "../../../shared/criar-elemento/index.js";
import ImportCss from "../../../../utils/import-css/index.js";

ImportCss({ path: "cart/product-list/product" });

//Retorna o produto já com todas as informações.

const Product = {
  build: ({ bestPriceFormated, image, name, productId, quantity }) => {
    const product = CriarElemento({
      tipoElemento: "li",
      classes: ["product-box"]
    });
    const productImage = CriarElemento({
      tipoElemento: "img",
      classes: ["product-image"],
      imagem: `./src/assets/${image}`
    });
    const informationProduct = CriarElemento({
      tipoElemento: "div",
      classes: ["information-products"]
    });
    const productName = CriarElemento({
      tipoElemento: "span",
      classes: ["product-name"],
      conteudo: nameReduce({ name })
    });
    const productAmount = CriarElemento({
      tipoElemento: "span",
      classes: ["product-amount"],
      conteudo: `Qtd.: ${quantity}`
    });
    const amountPriceWrapper = CriarElemento({
      tipoElemento: "div",
      classes: ["amount-price-wrapper"]
    });
    const productPrice = CriarElemento({
      tipoElemento: "span",
      classes: ["product-price"],
      conteudo: bestPriceFormated
    });

    product.appendChild(productImage);
    product.appendChild(informationProduct);
    informationProduct.appendChild(productName);
    informationProduct.appendChild(amountPriceWrapper);
    amountPriceWrapper.appendChild(productAmount);
    amountPriceWrapper.appendChild(productPrice);

    //essa informação também não está sendo utilizada nesse projeto, mas é uma maneira legal de 
    //gardarmos uma iformação como o ID. É fácil recupera-la com getAttribute.
    product.setAttribute("productId", productId);

    productName.addEventListener("mouseleave", () => {
      productName.classList.toggle("product-name-smaller");
      productName.textContent = nameReduce({ name });
    });
    productName.addEventListener("mouseenter", () => {
      productName.classList.toggle("product-name-smaller");
      productName.textContent = name;
    });

    return product;
  },
  remove: () => {
    const product = document.querySelector(".product-box");
    product.remove();
  }
};

const nameReduce = ({ name }) => {
  let newName;
  if (name.length > 25) newName = name.substring(0, 25) + "...";

  return newName;
};

export default Product;
