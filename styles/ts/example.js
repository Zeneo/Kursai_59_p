"use strict";
console.log('hi');
let username = 'Paulius';
const age = 37;
const someRandom = 'asd';
const arrNums = [2, 3, 5, 7];
const arrStr = ['asd', 'qwe', 'zxc'];
const items = ['asd', 60, true];
const sameName = 4;
const myUser = {
    userName: 'Paulius',
    age: 37,
    city: "Trakai",
    hasCat: true,
    hasDog: 1
};
const myUser2 = {
    userName: 'Paulius',
    city: "Trakai",
    hasCat: true,
    hasDog: 1
};
const myCity = {
    population: 400,
    country: 'Lithuania',
};
function sayName(username) {
    return username;
}
function countData(num1, num2) {
    console.log(num1 + num2);
}
function updateUser(item) {
    console.log(item.userName);
    console.log(item.age);
}
const a = {
    "gender": "female",
    "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
    },
    "location": {
        "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
        }
    },
    "email": "jennie.nichols@example.com",
    "login": {
        "uuid": true,
        "username": "yellowpeacock117",
    },
    "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
    },
    "id": {
        "name": "SSN",
        "value": "405-88-3636"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    "nat": "US"
};
