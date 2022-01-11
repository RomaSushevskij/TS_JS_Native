import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser, removeUsersBook, updateBooksToUser, updateUsersCompany, updateUsersCompany_2,
    upgradeUserLaptop, UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10";


test('reference type test', () => {
    let userRoman: UserType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'}
    };
    const awesomeUser = makeHairStyle(userRoman, 5);

    expect(userRoman.hair).toBe(500);
    expect(awesomeUser.hair).toBe(100);
    expect(awesomeUser.address).toBe(userRoman.address);
});

test('change address', () => {
    let userRoman: UserWithLaptopType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'},
        laptop: {title: 'Lenovo'}
    };
    const movedUser = moveUser(userRoman, 'Gdansk');

    expect(userRoman).not.toBe(movedUser);
    expect(userRoman.address).not.toBe(movedUser.address);
    expect(movedUser.address.city).toBe('Gdansk');
    expect(userRoman.laptop).toBe(movedUser.laptop);
});

test('upgrade laptop to macbook', () => {
    let userRoman: UserWithLaptopType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'},
        laptop: {title: 'Lenovo'}
    };
    const upgradedUsersLaptop = upgradeUserLaptop(userRoman, 'Macbook');

    expect(userRoman).not.toBe(upgradedUsersLaptop);
    expect(userRoman.address).toBe(upgradedUsersLaptop.address);
    expect(upgradedUsersLaptop.laptop.title).toBe('Macbook');
    expect(userRoman.laptop).not.toBe(upgradedUsersLaptop.laptop);
    expect(userRoman.laptop.title).toBe('Lenovo');
});
test('add new books to user', () => {
    let userRoman: UserWithBooksType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'},
        laptop: {title: 'Lenovo'},
        books: ['HTML', 'CSS', 'JS', 'React']

    };
    const userWithNewBooks = addNewBooksToUser(userRoman, ['TS', 'Redux']);

    expect(userRoman).not.toBe(userWithNewBooks);
    expect(userRoman.address).toBe(userWithNewBooks.address);
    expect(userRoman.laptop).toBe(userWithNewBooks.laptop);
    expect(userRoman.books).not.toBe(userWithNewBooks.books);
    expect(userWithNewBooks.books[4]).toBe('TS');
    expect(userWithNewBooks.books[5]).toBe('Redux');
    expect(userWithNewBooks.books).toStrictEqual(['HTML', 'CSS', 'JS', 'React', 'TS', 'Redux']);
    expect(userRoman.books.length).toBe(4);
    expect(userWithNewBooks.books.length).toBe(6);
});
test('update JS book to TS book', () => {
    let userRoman: UserWithBooksType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'},
        laptop: {title: 'Lenovo'},
        books: ['HTML', 'CSS', 'JS', 'React']

    };
    const userWithUpdatedBooks = updateBooksToUser(userRoman, 'JS', 'TS');

    expect(userRoman).not.toBe(userWithUpdatedBooks);
    expect(userRoman.address).toBe(userWithUpdatedBooks.address);
    expect(userRoman.laptop).toBe(userWithUpdatedBooks.laptop);
    expect(userRoman.books).not.toBe(userWithUpdatedBooks.books);
    expect(userWithUpdatedBooks.books[2]).toBe('TS');
    expect(userRoman.books.indexOf('JS')).toBe(userWithUpdatedBooks.books.indexOf('TS'));
});
test('remove JS book from users books', () => {
    let userRoman: UserWithBooksType & WithCompaniesType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'},
        laptop: {title: 'Lenovo'},
        books: ['HTML', 'CSS', 'JS', 'React'],
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'Incubator'},
            {id: 3, title: 'Yandex'}
        ]

    };
    const userWithRemovingBook = removeUsersBook(userRoman, 'JS');

    expect(userRoman).not.toBe(userWithRemovingBook);
    expect(userRoman.address).toBe(userWithRemovingBook.address);
    expect(userRoman.laptop).toBe(userWithRemovingBook.laptop);
    expect(userRoman.books).not.toBe(userWithRemovingBook.books);
    expect(userWithRemovingBook.books[2]).toBe('React');
    expect(userWithRemovingBook.books.includes('JS')).toBe(false);
});
test('update users company', () => {
    let userRoman: UserWithBooksType & WithCompaniesType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'},
        laptop: {title: 'Lenovo'},
        books: ['HTML', 'CSS', 'JS', 'React'],
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'Incubator'},
            {id: 3, title: 'Yandex'}
        ]

    };
    const userWithUpdatedCompany = updateUsersCompany(userRoman, 1, 'Epam') as UserWithBooksType & WithCompaniesType;

    expect(userRoman).not.toBe(userWithUpdatedCompany);
    expect(userRoman.address).toBe(userWithUpdatedCompany.address);
    expect(userRoman.laptop).toBe(userWithUpdatedCompany.laptop);
    expect(userRoman.books).toBe(userWithUpdatedCompany.books);
    expect(userRoman.companies).not.toBe(userWithUpdatedCompany.companies);
    expect(userWithUpdatedCompany.companies[0].title).toBe('Epam');
});
test('update users company_2', () => {
    const userRoman: UserWithBooksType = {
        name: 'Roman',
        hair: 500,
        address: {city: 'Gomel'},
        laptop: {title: 'Lenovo'},
        books: ['HTML', 'CSS', 'JS', 'React'],
    };
    const companies: { [key: string]: Array<{ id: number, title: string }> } = {
        'Roman': [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'Incubator'},
            {id: 3, title: 'Yandex'}
        ],
        'Lena': [
            {id: 1, title: 'Children garden'},
            {id: 2, title: 'School'},
        ]
    };

    const updatedCompanies = updateUsersCompany_2(companies, 'Roman', 1, 'Epam');

    expect(updatedCompanies['Roman']).not.toBe(companies['Roman']);
    expect(updatedCompanies['Lena']).toBe(companies['Lena']);
    expect(updatedCompanies['Roman'][0].title).toBe('Epam');
});