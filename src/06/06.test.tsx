import {
    CityType, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses,

} from "./06";


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


test('list of streets titles of goverments buildings', () => {
    let streets = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings)

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe('Central Str');
    expect(streets[1]).toBe('South Str');
});

test('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('Happy street');
});
