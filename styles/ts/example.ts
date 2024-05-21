console.log('hi');
let username: string = 'Paulius'
const age: number = 37
const someRandom: any = 'asd'

const arrNums: number[] = [2,3,5,7]
const arrStr: string[] = ['asd', 'qwe', 'zxc']

const items: [string, number, boolean] = ['asd', 60, true]
const sameName: string | number = 4

//Objects
type UserType = {
    userName: string,
    age?: number,
    city: string,
    hasCat: boolean,
    hasDog: 1 | 0
}

const myUser: UserType = {
    userName: 'Paulius',
    age: 37,
    city: "Trakai",
    hasCat: true,
    hasDog: 1
}
const myUser2: UserType = {
    userName: 'Paulius',
    city: "Trakai",
    hasCat: true,
    hasDog: 1
}

interface City {
    population: number,
    country: string,
}

const myCity: City = {
    population: 400,
    country: 'Lithuania',
}

function sayName(username: string):string {
    return username
}

function countData(num1: number, num2: number):void {
    console.log(num1+num2)
}

function updateUser(item: UserType):void {
    console.log(item.userName);
    console.log(item.age)
}


interface ATest {

    gender: 'male' | 'female',
    name: {
        title?: string,
        first: string,
        last: string,
    },
    location: {
        street: {
            number: number,
            name: string,
        },
        city: string,
        state: string,
        country: string,
        postcode: string,
        timezone: {
            offset: string,
            description: string
        }
    },
    email: string,
    login: {
        uuid: boolean,
        username: string,
    },
    dob: {
        date: string,
        age: number,
    },
    id: {
        name: string,
        value: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    nat: string

}
const a: ATest =
    {
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
    }















