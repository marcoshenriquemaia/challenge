import store from "../store/index.js";

//Eu fiz uma adaptação deste Request através da documentação que deixei lá no commit. 
//Esse Request le e seta as informações já na Store.

const RequestJson = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            store.setState(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", "products.json", true);
    xhttp.send();
}

export default RequestJson;