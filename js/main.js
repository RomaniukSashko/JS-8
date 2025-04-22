// Напиши скрипт, який об'єднує всі елементи масиву в один рядок. 
// Елементів може бути довільна кількість. 
// Нехай елементи масиву в рядку будут розділені комою.

const fruits = ["Lemon", "Papaya", "Grapefruit", "Peach", "Orange"];

// Через for

for (let i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i]);
}

// Через join()

console.log(fruits.join(", "));

// Працюємо з колекцією карток в trello. 
// Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

console.log(cards);

// Видалення карточки-3

const cardToRemove = cards.indexOf("Карточка-3");
console.log(cardToRemove);

const removedCard = cards.splice(2, 1);
console.log(cards);

// Додавання карточки-6

const cardToInsert = "Карточка-6";
cards.push(cardToInsert);
console.log(cards);

// Оновлення карточки-4

const cardToUpdate = cards.indexOf("Карточка-4");
console.log(cardToUpdate);

const updatedCard = cards.splice(2, 1, "Карточка-4 Нова");
console.log(cards);
