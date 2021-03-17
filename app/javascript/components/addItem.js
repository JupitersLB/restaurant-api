const addMenuItem = () => {
  // button used for adding an item
  const createButton = document.getElementById("addItemBtn");

  //listens for a click event
  createButton.addEventListener("click", event => {

    // selects the container for the menuItems and gets the id of the last menuItem element
    const lastId = document.querySelector(".menuItemContainer").lastElementChild.id;

    // increases the id by one to work with rails naming conventions
    const newId = parseInt(lastId, 10) + 1;

    // selects the first menuItem element and replaces all references of 0 with the newId
    const newMenuItem = document.querySelector('[id="0"]').outerHTML.replace(/0/g,newId);

    // inserts the newMenuItem element at the bottom of the menuItemContainer
    document.querySelector(".menuItemContainer").insertAdjacentHTML(
        "beforeend", newMenuItem
    );
  });
}
export { addMenuItem }
