import CriarElemento from "../../shared/criar-elemento/index.js";

const IconsWrapper = {
    build: () =>{
    const iconWrapper = CriarElemento({tipoElemento: 'div', classes: ['icons-wrapper']});
    const searchButtom = CriarElemento({tipoElemento: 'i', classes: ['material-icons', 'md-36', 'search-icon'], conteudo: 'search'});
    const personButtom = CriarElemento({tipoElemento: 'i', classes: ['material-icons', 'md-36', 'person-icon'], conteudo: 'person'});
    const cartButtom = CriarElemento({tipoElemento: 'i', classes: ['material-icons', 'md-36', 'shopping_cart'], conteudo: 'shopping_cart'});

    iconWrapper.appendChild(searchButtom);
    iconWrapper.appendChild(personButtom);
    iconWrapper.appendChild(cartButtom);

    return iconWrapper;
    },
    remove: () =>{

    }
}

export default IconsWrapper;