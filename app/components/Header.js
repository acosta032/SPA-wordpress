import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";
import { Title } from "./Title.js";


export function Header() {
    const $header = document.createElement("header");
    $header.classList.add("header");

    /*Seleccionar sugerencia de importación */
    $header.appendChild(Title());
    $header.appendChild(Menu());
    $header.appendChild(SearchForm());

    return $header;
}