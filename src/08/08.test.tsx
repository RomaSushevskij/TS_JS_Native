import {UsersType} from "./08";


let usersAssociativeArray: UsersType;

beforeEach(() => {
    usersAssociativeArray = {
        '102': {id: 102, name: 'Roman'},
        '10055': {id: 10055, name: 'Elena'},
        '25': {id: 25, name: 'Artem'},
        '1': {id: 1, name: 'Dmitry'}
    }
});

test('should be corrected update', () => {
    usersAssociativeArray['25'].name = 'Anna';

    expect(usersAssociativeArray['25']).toStrictEqual({id: 25, name: 'Anna'})
});


const getButton = document.getElementById('get');
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');
const updateButton = document.getElementById('update');


if (getButton) {
    getButton.addEventListener('click', function () {
        //Получение элемента по id
        const Roman = usersAssociativeArray['102'];
        console.log('Получение элемента по id = 102');
        console.log(Roman)
    })
}

if (addButton) {
    addButton.addEventListener('click', function () {
        //Добавление нового элемента по id элемента
        const Sasha = {id: 10078, name: 'Sasha'};
        usersAssociativeArray[Sasha.id] = Sasha
        console.log('Добавление нового элемента Sasha c id = 10078');
        console.log(usersAssociativeArray);
    })
}
if (deleteButton) {
    deleteButton.addEventListener('click', function () {
        //Удаление элемента по id
        delete usersAssociativeArray['102'];
        console.log('Удаление элемента по id = 102 (Roman)');
        console.log(usersAssociativeArray);
    })
}
if (updateButton) {
    updateButton.addEventListener('click', function () {
        //Обновление элемента по id
        usersAssociativeArray['25'].name = 'Anna';
        console.log('Обновление элемента по id = 25 (Artem - Anna)');
        console.log(usersAssociativeArray);
    })
}


//----------------------------------------------------------------------------------------------------------------
let usersArray = [
    {id: 102, name: 'Roman'},
    {id: 10055, name: 'Elena'},
    {id: 25, name: 'Artem'},
    {id: 1, name: 'Dmitry'}
];

const getArrButton = document.getElementById('getArr');
const addArrButton = document.getElementById('addArr');
const deleteArrButton = document.getElementById('deleteArr');
const updateArrButton = document.getElementById('updateArr');
if (getArrButton) {
    getArrButton.addEventListener('click', function () {
        //Получение элемента по id
        const Roman = usersArray.find(user => user.id === 102);
        console.log('Получение элемента по id = 102');
        console.log(Roman)
    })
}

if (addArrButton) {
    addArrButton.addEventListener('click', function () {
        //Добавление нового элемента по id элемента
        const Sasha = {id: 10078, name: 'Sasha'};
        !usersArray.includes(Sasha) && usersArray.push(Sasha)
        console.log('Добавление нового элемента Sasha c id 10078 с учетом возможности появления дубликата');
        console.log(usersArray);
    })
}

if (deleteArrButton) {
    deleteArrButton.addEventListener('click', function () {
        //Удаление элемента по id
        usersArray = usersArray.filter(user => user.id !== 102);
        console.log('Удаление элемента по id = 102 (Roman)');
        console.log(usersArray);
    })
}

if (updateArrButton) {
    updateArrButton.addEventListener('click', function () {
        //Обновление элемента по id
        usersArray = usersArray.map(user => user.id === 25 ? {...user, name: 'Anna'} : user)
        console.log('Обновление элемента по id = 25 (Artem - Anna)');
        console.log(usersArray);
    })
}

