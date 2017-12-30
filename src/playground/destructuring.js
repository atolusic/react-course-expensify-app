// const person = {
//     name: 'Tole',
//     age: 26,
//     location: {
//         city: 'Djakovo',
//         temp: 4
//     }
// }

// const { name, age } = person;

// console.log(`It's ${}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [Coffee, , mediumPrice] = item;

console.log(`A medium ${Coffee} costs ${mediumPrice}.`);