//Bai 1

let menu = ["rau xào", "thịt luộc", "gà rán"];
let input = prompt("Vui lòng nhập một trong các ký tự sau: C, R, U, D");


if (input === "C") {
  let newDish = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
  menu.push(newDish);
  localStorage.setItem("menu", JSON.stringify(menu));


} else if (input === "R") {
  let storedMenu = JSON.parse(localStorage.getItem("menu"));
  let menuString = storedMenu.join(", ");
  
  alert(`Danh sách món ăn mới nhất trong menu trên localStorage: ${menuString}`);
}

else if (input === "U") {
  let oldDish = prompt("Mời người dùng nhập vào tên món muốn update");
  let index = menu.indexOf(oldDish);

  if (index !== -1) {
    let newDish = prompt("Mời người dùng nhập vào tên món mới");
    menu[index] = newDish;
    localStorage.setItem("menu", JSON.stringify(menu));
  }
} 

else if (input === "D") {
  let dishToDelete = prompt("Mời người dùng nhập vào tên món muốn Delete");
  let index = menu.indexOf(dishToDelete);

  if (index !== -1) {
    menu.splice(index, 1);
    localStorage.setItem("menu", JSON.stringify(menu));
  }
}

                                           
   