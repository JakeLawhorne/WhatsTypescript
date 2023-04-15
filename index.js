"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
require("./style.css");
require("node_modules/bootstrap/dist/css/bootstrap.min.css");
const form = document.querySelector('#defineform');
form.onsubmit = () => {
    const formData = new FormData(form);
    console.log(formData);
    const text = formData.get('defineword');
    console.log(text);
    return false; // prevent reload
};
//# sourceMappingURL=index.js.map