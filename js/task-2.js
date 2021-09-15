const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientList = document.querySelector("#ingredients");
const makeIngredientList = items => {
  return items.map(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    return listItem;
  });
};

const elements = makeIngredientList(ingredients);
ingredientList.append(...elements);
