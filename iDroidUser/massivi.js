const gadgets = ["iPhone 14 Pro", { laptop: "MacBook Pro 13" }, { camera: "Panasonic GH5s" }, "Galaxy Watch 4"];
let allGadgets = gadgets.length;
const videoGadget = gadgets[2];

console.log(allGadgets); // Количество элементов в массиве
console.log(videoGadget); // 2 элемент массива
console.log(gadgets[1]); // 1 элемент массива

gadgets[1].laptop = "MacBook Pro 14"; // заменил 1 запись объекта (элемента) 
console.log(gadgets[1]); // обновленный элемент

gadgets.shift(); // удалил 1 запись через метод shift

console.log(gadgets); // проверил удаление записи

gadgets.unshift("Google Pixel 7 Pro"); // добавил новую первую запись

console.log(gadgets); // проверил добавление записи

gadgets.push("Steam Deck"); // добавил запись в конец массива

console.log(gadgets); // проверил добавление записи

// итерация всех объектов массива
for (const gadget of gadgets) {
	console.log(gadget);
}

let videoMake = gadgets.slice(1, 3); // создал новый массив VideoMake и перенес туда 2 элемента из старого
console.log(videoMake); // проверил наличие элементов в новом массиве

let deletedGadgets = gadgets.splice(2, 1); // удалил из массива, начиная со 2 индекса 1 элемент с помощью метода
console.log(gadgets); // проверил обновленный список
console.log(deletedGadgets); // проверил удаленный элемент

gadgets.splice(2, 1, { camera: "Sony A7c" }); // добавил новый элемент в массив на 2 индекс с помщью метода
console.log(gadgets); // проверил обновленный список
console.log(gadgets[2]); // 

// итерация всех объектов массива
for (const gadget of gadgets) {
	console.log(gadget);
} 