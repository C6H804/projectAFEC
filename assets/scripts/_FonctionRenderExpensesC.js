import { getDate } from "./_FonctionGetDate.js";
import { createElement } from "./_FonctionCreateElement.js";

export function renderExpense(e) {
    let container = createElement("div", { class: "c-depense-db", id: "depense" + e.id });
    let header = createElement("div", { class: "c-depense-db_header", id: "header" + e.id });
    let date = new Date(e.date);
    // format the date to be dd/mm/yyyy without using getDate()
    date = date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    let fullDate = getDate(e.date);


    header.innerHTML = `
    <img class="image-depense" src="${e.imagePath}" alt="image de la dépense" width="48" height="48">
    <div class="nom-depense bold">${e.name}</div>
    <div class="mobile date large-mobile italic">${date}</div>
    <div class="date desktop italic">${fullDate}</div>
    <div class="ammount-depense bold">${Number(e.totalPrice).toFixed(2)} €&nbsp;</div>

    <svg xmlns="http://www.w3.org/2000/svg" class="desktop fleche fleche-off bi bi-chevron-down" id="fleche${e.id}" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
    `;

    container.appendChild(header);

    return container
}