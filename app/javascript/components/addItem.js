// import { initSelect2 } from './init_select2';

const addMenuItem = () => {
  const createButton = document.getElementById("addItemBtn");
  console.log('hello')
  createButton.addEventListener("click", event => {
    console.log('click')

    const lastId = document.querySelector(".menuItemContainer").lastElementChild.id;

    const newId = parseInt(lastId, 10) + 1;

    const newMenuItem = document.querySelector('[id="0"]').outerHTML.replace(/0/g,newId);

    document.querySelector(".menuItemContainer").insertAdjacentHTML(
        "beforeend", newMenuItem
    );
    // document.querySelector(`[id="${newId}"] span`).remove()

    // initSelect2();
  });
}
export { addMenuItem }
