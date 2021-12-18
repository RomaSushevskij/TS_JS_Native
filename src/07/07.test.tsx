import {CityType,} from "./07";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                },
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                },
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                },
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 100,
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 100,
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }

});

test('destructuring of city should be corrected', () => {
    const {title, houses, ...restCity} = city;

    expect(title).toBe('New York');
    expect(houses[0]).toStrictEqual(city.houses[0]);
    expect(restCity).toStrictEqual({
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 100,
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 100,
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    });

});

test('destructuring of houses should be corrected', () => {
    const [firstHouse, , thirdHouse] = city.houses;

    expect(firstHouse.buildedAt).toBe(2012);
    expect(thirdHouse.id).toBe(3);

});

test('after destructuring restHouses should contain two houses', () => {
    const [firstHouse, ...restHouses] = city.houses;

    expect(restHouses.length).toBe(2);
    expect(firstHouse).toStrictEqual(city.houses[0]);
});


