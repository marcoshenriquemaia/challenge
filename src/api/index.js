import store from "../store/index.js";

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