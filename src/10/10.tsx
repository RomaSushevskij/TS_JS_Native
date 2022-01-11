export type UserType = {
    name: string
    hair: number
    address: { city: string }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & { //Объединение типа
    laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: CompanyType[]
}

export const makeHairStyle = (user: UserType, power: number) => {
    return {...user, hair: user.hair / power}
};

export const moveUser = (user: UserWithLaptopType, city: string) => {
    return {...user, address: {...user.address, city: city}};

    // const copy = {...user};
    // copy.address = {...user.address};
    // copy.address.city = city;
};

export const upgradeUserLaptop = (user: UserWithLaptopType, laptop: string) => {
    return {...user, laptop: {...user.laptop, title: laptop}};
};

export const addNewBooksToUser = (user: UserWithBooksType, newBooks: string[]) => {
    return {...user, books: [...user.books, ...newBooks]}
};
export const updateBooksToUser = (user: UserWithBooksType, lastBook: string, newBook: string) => {
    return {...user, books: user.books.map(book => book === lastBook ? newBook : book)}
};
export const removeUsersBook = (user: UserWithBooksType, removedBook:string) => {
    return {...user, books: user.books.filter(book => book !== removedBook)}
};
export const updateUsersCompany =(user:WithCompaniesType, companyId:number, title: string) => {
    return {...user, companies: user.companies.map(comp => comp.id === companyId ? {...comp, title} : comp)}
};
export const updateUsersCompany_2 = (companies:{[key:string]: Array<CompanyType>},
                                     userName: string,
                                     companyId: number,
                                     title:string) => {
    return {...companies, [userName]: companies[userName].map(comp => comp.id === companyId ? {...comp, title} : comp) }
};