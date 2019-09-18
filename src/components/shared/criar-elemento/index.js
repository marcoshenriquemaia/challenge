// Este foi um shared criado por mim em um outro projeto (contas). Ele basicamente recebe o que quer criar e 
// retorna o elemento com todas as funcionalidades

const CriarElemento = ({ tipoElemento, conteudo, classes, cor, alt, tipo, placeholder, id, nameInput, imagem }) => {
    const elemento = document.createElement(tipoElemento);

    if (conteudo) elemento.textContent = conteudo;
    if (cor) elemento.style.backgroundColor = cor;
    if (alt) elemento.setAttribute('alt', alt);
    if (tipo) elemento.setAttribute('type', tipo);
    if (placeholder) elemento.setAttribute('placeholder', placeholder);
    if (id) elemento.idList.add(id);
    if (placeholder) elemento.setAttribute('placeholder', placeholder);
    if (nameInput) elemento.setAttribute('for', nameInput);
    if (classes) {
        classes.map(classe => {
            elemento.classList.add(classe);
        })
    }
    if (imagem) elemento.src = imagem;
    return elemento;
}

export default CriarElemento;