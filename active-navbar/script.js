const listItems = document.querySelectorAll(".list-item");

function ToggleActive() {
  listItems.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

listItems.forEach((item) => {
  item.addEventListener("click", ToggleActive);
});
