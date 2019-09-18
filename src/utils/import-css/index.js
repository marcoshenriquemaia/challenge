import CriarElemento from "../../components/shared/criar-elemento/index.js";

// O ImportCss serve para evitar o trablho manual e poluir o HTML, além de deixar o código mais semântico, porque
// é muito mais fácil enxergar onde ele está importante.
// ele identifica o que quer Importar e recebe um path ou uma page. 
// também foi criado por mim no meu projeto Contas

const ImportCss = ({path, page}) =>{
    const head = document.querySelector('head');
    const link = CriarElemento({tipoElemento: 'link'});
    link.rel = 'stylesheet'
    if (page) {
        link.href = `./src/pages/${page}/index.css`
    } else if (path){
        link.href = `./src/components/${path}/index.css`
    } else{
        link.href = `./src/assets/theme/style.css`
    }
    head.appendChild(link);
}

export default ImportCss;