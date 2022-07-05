const cont = document.querySelector(".cont");
const input = document.querySelector(".input");
const price = document.querySelector(".price");
const btn = document.querySelector(".save");
const order = document.querySelector(".order");
let list = [];
let currentId = 1;
const deleteItem = (e) => {
  list = list.filter((el) => {
    return el.id !== e;
  });

  render();
};
const createItem = () => {
  const item = {
    label: input.value,
    price: price.value,
    id: currentId,
  };
  list.push(item);
  currentId++;
  input.value = "";
  price.value = "";
  render();
};

const render = () => {
  order.innerHTML = "";

  list.map((element) => {
    const span = document.createElement("span");
    const butt = document.createElement("button");
    const li = document.createElement("li");
    span.innerHTML = `${element.label} - ${element.price}`;
    li.appendChild(span);

    butt.innerHTML = "delete";

    li.appendChild(butt);
    butt.addEventListener("click", function () {
      deleteItem(element.id);
    });
    order.appendChild(li);
  });
};
btn.addEventListener("click", createItem);

const date = new Date().getDay();
console.log(date);
switch (5) {
  case 1:
    console.log("mondey");
    break;
  case 2:
    console.log("tuesday");
    break;
  default:
    console.log("error");
}
