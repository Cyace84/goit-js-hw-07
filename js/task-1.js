const itemElement = document.querySelectorAll(".item");

console.log(`В списке ${itemElement.length} категории.`);

itemElement.forEach(item =>
  console.log(
    `Категория: ${item.firstElementChild.textContent}
    Количество элементов: ${item.lastElementChild.children.length}`,
  ),
);
