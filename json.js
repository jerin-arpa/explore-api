const user = { id: 1, name: 'Ismat Jerin', job: 'student' };
// javaScript object notation (json)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);


const shop = {
    owner: 'jerin',
    address: {
        street: 'abcd',
        city: 'sylhet',
        country: 'BD',
    },
    products: ['laptop', 'Mobile', 'Mic'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);