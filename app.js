import Navbar from "./src/components/navbar/index.js";
import RequestJson from "./src/api/index.js";

const $body = document.querySelector('body');

$body.onload = Navbar.build();
$body.onload = RequestJson();