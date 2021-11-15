let john = { name: "John" };

let map = new Map();
map.set(john, "...");

console.log(map.get({name:'John'}))
john = null; // перезаписываем ссылку на объект

console.log(map)